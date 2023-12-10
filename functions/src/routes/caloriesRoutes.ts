import express from 'express'
import { createCalories, getCalories } from '../controllers/caloriesController'

const foodRoutes = express.Router()

foodRoutes.get('/calories', getCalories)
foodRoutes.post('/calories', createCalories)

export default foodRoutes