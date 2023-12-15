import express from 'express'
import { emailVerification, login, regUser, resendVerification, resetPass, resetPassReq } from '../controllers/userController'
import passport from '../config/auth/googleAuth'
import { FE_URL } from '../utils/appUrl'

type User = {
    token?: string;
  };

const authRoutes = express.Router()

authRoutes.post('/auth/register', regUser)
authRoutes.post('/auth/login', login)
authRoutes.get('/verify', emailVerification)
authRoutes.post('/verify', resendVerification)
authRoutes.post('/request-reset', resetPassReq)
authRoutes.post('/reset', resetPass)
authRoutes.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRoutes.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: `${FE_URL}/login`, session: false }),
    (req , res) => {
    console.log('Authenticated user:', req.user);
      const user = req.user as User;
      const token = user.token
      res.redirect(`${FE_URL}/?token=${token}`);
    }
  );

export default authRoutes