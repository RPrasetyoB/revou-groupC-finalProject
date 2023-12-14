import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { JWT_Sign } from '../config/auth/jwt';
import { v4 } from "uuid";
import { getToken, loggedUser } from '../utils/getToken';
import { getUser, getUsers, loginUser, registerUser, updateUser, verifyEmail } from '../services/userService'
import { sendVerificationEmail } from '../services/emailService';
import { Session, SessionData } from 'express-session';
import { prisma } from '../config/db/db.connection';

interface CustomSession extends Session {
  email?: string;
}

//------ Login user ------
const login = async (req: Request, res: Response, next: NextFunction) => {
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
const regUser = async (req: Request & { session: CustomSession }, res: Response, next: NextFunction) => {
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
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
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
const editUser = async (req: Request, res: Response, next: NextFunction) => {
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
const emailVerification = async (req: Request, res: Response, next: NextFunction) => {
  const verificationToken = req.query.token as string;
  try {
    const result = await verifyEmail(verificationToken);
    if (result.success) {
      res.redirect('http://localhost:5173/verify');
    } else {
      res.redirect('http://localhost:5173/failed-veriy')
    }
  } catch (error) {
    next(error);
  }
};


// ----- resend email verification -----
const resendVerification = async (req: Request & { session: CustomSession }, res: Response, next: NextFunction) => {
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
// const resetPassReq = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//       const { email } = req.body;
//       const result = await passResetReq(email);

//       if (result.success) {
//           return res.status(200).json({
//               success: true,
//               message: 'Password reset link sent',
//               data: result.data,
//           });
//       } else {
//           return res.status(404).json({
//               success: false,
//               message: result.message,
//           });
//       }
//   } catch (error) {
//       next(error);
//   }
// }

// const resetPass = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//       const  key  = req.query.key as string
//       const { password } = req.body;
//       const result = await passwordReset(key, password);

//       if (result.success) {
//           return res.status(200).json({
//               success: true,
//               message: 'Password reset successful',
//           });
//       } else {
//           return res.status(401).json({
//               success: false,
//               message: result.message,
//           });
//       }
//   } catch (error) {
//       next(error);
//   }
// }


export { userProfile, getAllUsers, regUser, login, emailVerification, resendVerification, editUser }