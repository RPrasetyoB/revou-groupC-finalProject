import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { JWT_Sign } from '../config/auth/jwt';
import { profile } from 'console';
import { findOrCreateGoogleUser } from '../services/googleService';

//------ Login google user ------
const googleLogin = async (profile: any) => {
    try {
      const result = await findOrCreateGoogleUser(profile);
  
      if (result.success) {
        const token = jwt.sign({ id: result.data.id, username: result.data.username }, JWT_Sign);
        return {
            success: true,
            status: 200,
            message: result.message,
            user: result.data,
            token: token
        };
      }
    } catch (error: any) {
      console.error(error);
      throw { success: false, message: error.message, status: error.status || 500 };
    }
  };
  
  export { googleLogin };