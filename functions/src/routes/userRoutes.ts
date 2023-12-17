import express from 'express'
import { userEdit, userGetAll, userProfile } from '../controllers/userController'
import authentication from '../middlewares/authentication'

const userRoutes = express.Router()

userRoutes.get('/users', userGetAll)
userRoutes.put('/profile', authentication, userEdit)
userRoutes.get('/profile', authentication, userProfile)

export default userRoutes