import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { JWT_Sign } from '../config/auth/jwt';
import { v4 } from "uuid";
import { getToken, loggedUser } from '../utils/getToken';
import { getUser, getUsers, loginUser, passResetReq, passwordReset, registerUser, updateUser, verifyEmail } from '../services/userService'
import { sendVerificationEmail } from '../services/emailService';
import { prisma } from '../config/db/dbConnection';
import { FE_URL } from '../utils/appUrl';


//------ Login user ------
const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const result = await loginUser({ username, password });
    if (result.success) {
      const token = jwt.sign({id : result.data.id, username: result.data.username}, JWT_Sign)
      return res.status(200).json({
        message: result.message,
        user: result.data,
        token: token
      });
    }
  } catch (error) {
    next(error);
  }
};


//------ Create user ------
const userRegister = async (req: Request & { session: CustomSession }, res: Response, next: NextFunction) => {
  try {
  const { username, email, password } = req.body;
  const verificationToken = v4()
  req.session.email = email;
  const result = await registerUser({ username, email, password, verificationToken})
  if (result.success) {
    res.status(201).json({
      success: true,
      message: result.message,
    })
    await sendVerificationEmail(email, verificationToken);
    }
  } catch (error) {
    next(error);
  }
};


//------ Get user profile -------
const userProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const decodeToken = getToken(req)
    const { userId } = loggedUser(decodeToken)
    const result = await getUser(userId)
    if (result.success) {
      res.status(201).json({
        success: true,
        message: result.message,
        data: result.data
      })
    }
  } catch (error) {
    next(error);
  }
}


//------ Get all users ------
const userGetAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getUsers() 
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    } 
  } catch (error) {
    next(error);
  }
};


//------ Update user -------
const userEdit = async (req: Request, res: Response, next: NextFunction) => {
  const decodeToken = getToken(req)
  const { username } = loggedUser(decodeToken)
    try {
        const { nickname, weight, height, gender, age, activeness, category } = req.body;
        const result = await updateUser(username, { nickname, weight, height, gender, age, activeness, category });

    if (result.success) {
      res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data: result.data,
      });
    } 
    } catch (error) {
        next(error)
    }
}


//------ Verify user email -------
const userEmailVerification = async (req: Request, res: Response, next: NextFunction) => {
  const verificationToken = req.query.token as string;
  try {
    const result = await verifyEmail(verificationToken);
    if (result.success) {
      res.redirect(`${FE_URL}/verify`);
    } else {
      res.redirect('http://localhost:5173/failed-verify')
    }
  } catch (error) {
    next(error);
  }
};


// ----- resend email verification -----
const userResendVerification = async (req: Request & { session: CustomSession }, res: Response, next: NextFunction) => {
  try {
    const email = req.session.email;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email not found in session. Please register again.',
      });
    }
    const newVerificationToken = v4();
    await prisma.user.update({
      where: { email },
      data: { verificationToken: newVerificationToken },
    });
    await sendVerificationEmail(email, newVerificationToken);
    res.status(200).json({
      success: true,
      message: 'Verification email resent successfully. Please check your email for verification.',
    });
  } catch (error) {
    next(error);
  }
};


// //------ Password reset -------
const userResetPassReq = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const result = await passResetReq(email);
    if (result.success) {
      return res.status(200).json({
          success: true,
          message: result.message,
          key: result.data
        });
    } else {
      return res.status(404).json({
          success: false,
          message: result.message,
      });
    }
  } catch (error) {
      next(error);
  }
}

const userResetPass = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const {userId, token, password} = req.body;
      const result = await passwordReset(userId, token, password);
      if (result.success) {
          return res.status(200).json({
              success: true,
              message: result.message
          });
      } else {
          return res.status(401).json({
              success: false,
              message: result.message,
          });
      }
  } catch (error) {
      next(error);
  }
}


export { userProfile, userGetAll, userRegister, userLogin, userEmailVerification, userResendVerification, userEdit, userResetPassReq, userResetPass }