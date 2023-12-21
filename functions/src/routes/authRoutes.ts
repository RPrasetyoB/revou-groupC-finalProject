import express from 'express'
import { userEmailVerification, userLogin, userRegister, userResendVerification, userResetPass, userResetPassReq } from '../controllers/userController'
import passport from '../config/auth/googleAuth'
import { FE_URL } from '../utils/appUrl'

type User = {
    token?: string;
  };

const authRoutes = express.Router()

authRoutes.post('/auth/register', userRegister)
authRoutes.post('/auth/login', userLogin)
authRoutes.get('/verify', userEmailVerification)
authRoutes.post('/verify', userResendVerification)
authRoutes.post('/request-reset', userResetPassReq)
authRoutes.post('/reset', userResetPass)
authRoutes.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRoutes.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: `${FE_URL}/signin`, session: false }),
  (req , res) => {
      const user = req.user as User;
      const token = user.token
      res.redirect(`${FE_URL}/?token=${token}`);
    }
  );

export default authRoutes