import express from 'express'
import { editUser, getAllUsers } from '../controllers/userController'
import authorization from '../middlewares/authorization'

const userRoutes = express.Router()

userRoutes.get('/users', getAllUsers)
userRoutes.put('/profile', editUser)

export default userRoutes