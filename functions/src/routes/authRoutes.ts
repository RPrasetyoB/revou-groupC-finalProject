import express from 'express'
import { emailVerification, login, regUser } from '../controllers/userController'
import passport from '../config/auth/googleAuth'

const authRoutes = express.Router()

authRoutes.post('/auth/register', regUser)
authRoutes.post('/auth/login', login)
authRoutes.get('/verify', emailVerification)
authRoutes.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRoutes.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),(req, res) => { res.redirect('/')});

export default authRoutes