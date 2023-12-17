import express from 'express'
import { createCalories, getAllCaloriesHistory, getCalories } from '../controllers/caloriesController'
import authentication from '../middlewares/authentication'

const caloriesRoutes = express.Router()

caloriesRoutes.post('/calories', authentication, createCalories)
caloriesRoutes.get('/calories', authentication, getCalories)
caloriesRoutes.get('/all-calories', authentication, getAllCaloriesHistory)

export default caloriesRoutes