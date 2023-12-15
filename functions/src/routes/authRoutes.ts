import express from 'express'
import { emailVerification, login, regUser, resendVerification, resetPass, resetPassReq } from '../controllers/userController'
import passport from '../config/auth/googleAuth'
import { FE_URL } from '../utils/appUrl'

const authRoutes = express.Router()

authRoutes.post('/auth/register', regUser)
authRoutes.post('/auth/login', login)
authRoutes.get('/verify', emailVerification)
authRoutes.post('/verify', resendVerification)
authRoutes.post('/request-reset', resetPassReq)
authRoutes.post('/reset', resetPass)
authRoutes.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRoutes.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: `${FE_URL}/login` }),(req, res) => { res.redirect(`${FE_URL}`)});

export default authRoutes