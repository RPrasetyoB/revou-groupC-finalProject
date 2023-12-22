// import bcrypt from "bcrypt";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import NodeCache from "node-cache";
import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/dbConnection";
import { sentResetPassword } from "./emailService";
import { JWT_Sign } from "../config/auth/jwt";


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

    if (user.googleId == null && user.verificationToken !== null) {
      throw new ErrorCatch({
        success: false,
        message: "Email not verified yet, please verify your email",
        status: 403,
      });
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password!);

    if (isPasswordCorrect) {
      await failedLogins.del(username);
      return {
        success: true,
        message: "Login successfully",
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
const registerUser = async ({ username, email, password, verificationToken }: RegisterInput) => {
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
    const hashedPass = await bcryptjs.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { username, email, password: hashedPass, verificationToken }
    });
    return {
      success: true,
      data: newUser,
      message: 'User registered successfully. Please check your email for verification.'
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


//----- get current user detail ------
const getUser = async (userId: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: {id: userId}});
    return {
      success: true,
      message: "User detail retrieved successfully",
      status: 200,
      data: user,
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


//------ update user data -------
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


//----- verify email -----
const verifyEmail = async (verificationToken: string) => {
  try {
    const user = await prisma.user.findFirst({ where: { verificationToken: verificationToken } });
    if (!user) {
      throw new ErrorCatch({
        success: false,
        message: 'Invalid verification token or verification token expired.',
        status: 403
      });
    }
    await prisma.user.update({
        where: { id: user.id },
        data: { isEmailVerified: true, verificationToken: null },
      });
    return {
      success: true,
      message: 'Email verified successfully.',
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
// const resetRequest = (email: string, key: string) => {
//   console.log(`Subject: Password reset request`);
//   console.log(`To: ${email}`);
//   console.log(`${key}`);
// };
const passResetReq = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {email: email} });
      if (!user) {
        throw new ErrorCatch({
          success: false,
          message: "Email not registered",
          status: 404,
        });
      }
    const userId = user.id
    const token = jwt.sign({id : userId}, JWT_Sign, {expiresIn: "10m"})
    await sentResetPassword(email, token, userId)
    return {
      success: true,
      message: 'Password reset link sent to your email',
      data: { userId, token }
    };
  } catch (error: any) {
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status,
    });
  }
};

const passwordReset = async (userId: number, token: string, password: string) => {
  try {
    if (!token) {
      throw new ErrorCatch({
        success: false,
        status: 401,
        message: "Invalid or expired token",
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ErrorCatch({
        success: false,
        message: "Email invalid / not registered",
        status: 401,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
    return {
      success: true,
      message: "Password reset successfully",
    };
  } catch (error: any) {
    throw new ErrorCatch({
      success: false,
      message: error.message,
      status: error.status,
    });
  }
};


export { loginUser, registerUser, updateUser, getUser, getUsers, verifyEmail, passResetReq, passwordReset };
