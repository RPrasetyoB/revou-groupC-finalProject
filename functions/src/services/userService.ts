import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
import { userModel } from "../config/schemas/schema";
import { JWT_Sign } from "../config/auth/jwt";
import NodeCache from "node-cache";
import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/db.connection";

interface LoginInput {
  username: string;
  password: string;
}

interface RegisterInput {
  username: string;
  email: string;
  password: string;
}
interface UpdateInput {
  nickname: string;
  weight: string;
  height: string;
  gender: string;
  age: number;
  activeness: string;
  category: string;
}

const failedLogins = new NodeCache({ stdTTL: 20 }) as any;
const cache = new NodeCache({ stdTTL: 20 }) as any;


//------ login ------
const loginUser = async ({ username, password }: LoginInput) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username }
    });

    const loginAttempts = failedLogins.get(username) || 0;
    console.log("loginAttempts", loginAttempts);

    if (loginAttempts >= 4) {
      throw new ErrorCatch({
        success: false,
        message: "Too many failed login attempts. Please try again later",
        status: 429,
      });
    }

    if (!user) {
      failedLogins.set(username, loginAttempts + 1);
      throw new ErrorCatch({
        success: false,
        message: "Username or Password invalid",
        status: 401,
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      await failedLogins.del(username);
      return {
        success: true,
        message: "Login successfully",
        status: 200,
        data: {
          id: user.id,
          username: user.username,
        },
      };
    } else {
      failedLogins.set(username, loginAttempts + 1);
      throw new ErrorCatch({
        success: false,
        message: "Username or Password invalid",
        status: 401,
      });
    }
  } catch (error: any) {
    console.error(error);
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status,
    });
  } finally {
    await prisma.$disconnect();
  }
};


//------ register ------
const registerUser = async ({ username, email, password }: RegisterInput) => {
  if (!username) {
    throw new ErrorCatch({
      success: false,
      message: "Username cannot be empty",
      status: 400,
    });
  }
  if (password.length < 6) {
    throw new ErrorCatch({
      success: false,
      message: "Password must be at least 6 characters long",
      status: 400,
    });
  }
  if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) {
    throw new ErrorCatch({
      success: false,
      message: "Password must contain both alphabetic and numeric characters",
      status: 400,
    });
  }

  const existUser = await prisma.user.findUnique({
    where: { username }
  });

  if (existUser) {
    throw new ErrorCatch({
      success: false,
      message: 'Username already exists',
      status: 409,
    });
  }

  const existEmail = await prisma.user.findUnique({
    where: { email }
  });

  if (existEmail) {
    throw new ErrorCatch({
      success: false,
      message: 'Email already registered, please use other email',
      status: 409,
    });
  }

  try {
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { username, email, password: hashedPass }
    });
    return {
      success: true,
      data: newUser,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status,
    });
  } finally {
    await prisma.$disconnect();
  }
}


//------ get all users ------
const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return {
      success: true,
      message: "Users retrieved successfully",
      status: 200,
      data: users,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorCatch({
      success: false,
      message: "Error retrieving users",
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
};


//------ update password -------
const updateUser = async (username: string, { nickname, weight, height, gender, age, activeness, category }: UpdateInput) => {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { username: username },
      });
  
      if (!existingUser) {
        throw new ErrorCatch({
          success: false,
          message: "User not found",
          status: 404,
        });
      }
  
      const updatedUserData: Record<string, any> = {};
      if (nickname) updatedUserData.nickname = nickname;
      if (weight) updatedUserData.weight = parseInt(weight, 10);
      if (weight) updatedUserData.height = parseInt(height, 10);
      if (gender) updatedUserData.gender = gender;
      if (age) updatedUserData.age = age;
      if (activeness) updatedUserData.activeness = activeness;
      if (category) updatedUserData.category = category;
  
      const updatedUser = await prisma.user.update({
        where: { username: username },
        data: updatedUserData,
      });
  
      return {
        success: true,
        data: updatedUser,
      };
    } catch (error: any) {
      console.error(error);
      throw new ErrorCatch({
        success: false,
        message: error.message,
        status: error.status,
      });
    } finally {
      await prisma.$disconnect();
    }
  };


//------ password reset request ------
const sendEmail = (email: string, key: string) => {
  console.log(`Subject: Password reset request`);
  console.log(`To: ${email}`);
  console.log(`${key}`);
};
const passResetReq = async (email: string) => {
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) {
      throw new ErrorCatch({
        success: false,
        message: "Email not registered",
        status: 404,
      });
    }
    const key = v4();
    cache.set(key, email, 25 * 1000);
    sendEmail(user.email, key);
    const linkReset = `${key}`;
    // const linkReset = `https://week-16-rprasetyob-production.up.railway.app/reset?key=${key}`
    return {
      success: true,
      message: "Password reset link sent",
      data: linkReset,
    };
  } catch (error: any) {
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status,
    });
  }
};

const passwordReset = async (key: string, password: string) => {
  try {
    const email = cache.get(key);
    if (!email) {
      throw new ErrorCatch({
        success: false,
        status: 401,
        message: "Invalid or expired token",
      });
    }
    const user = await userModel.findOne({ email: email });
    if (!user) {
      throw new ErrorCatch({
        success: false,
        message: "Email invalid / not registered",
        status: 401,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await user.updateOne({ password: hashedPassword });

    cache.del(key);
    return {
      success: true,
      message: "Password reset successful",
    };
  } catch (error: any) {
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status,
    });
  }
};


export { loginUser, registerUser, updateUser,getUsers ,passwordReset, passResetReq };
