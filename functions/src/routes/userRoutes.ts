import express from 'express'
import { editUser, getAllUsers, userProfile } from '../controllers/userController'
import authentication from '../middlewares/authentication'

const userRoutes = express.Router()

userRoutes.get('/users', getAllUsers)
userRoutes.put('/profile', authentication, editUser)
userRoutes.get('/profile', authentication, userProfile)

export default userRoutes