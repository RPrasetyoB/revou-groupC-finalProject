import express from 'express'
import { createCalories, getCalories } from '../controllers/caloriesController'
import authentication from '../middlewares/authentication'

const caloriesRoutes = express.Router()

caloriesRoutes.get('/calories', authentication, getCalories)
caloriesRoutes.post('/calories', authentication, createCalories)

export default caloriesRoutes