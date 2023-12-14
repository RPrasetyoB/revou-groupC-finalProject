import express from 'express'
import { createCalories, getCalories } from '../controllers/caloriesController'
import authentication from '../middlewares/authentication'

const foodRoutes = express.Router()

foodRoutes.get('/calories', authentication, getCalories)
foodRoutes.post('/calories', authentication, createCalories)

export default foodRoutes