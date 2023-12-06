import express from 'express'
import { getAllUsers } from '../controllers/userController'
import authorization from '../middlewares/authorization'

const userRoutes = express.Router()

userRoutes.get('/users', getAllUsers)

export default userRoutes