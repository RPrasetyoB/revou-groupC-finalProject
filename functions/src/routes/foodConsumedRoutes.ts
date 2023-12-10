import express from 'express'
import { createDailyFoodConsumed, getDailyFoodConsumed, updateDailyFoodConsumed } from '../controllers/foodConsumedController'

const foodConsumedRoutes = express.Router()

foodConsumedRoutes.post('/consume', createDailyFoodConsumed)
foodConsumedRoutes.get('/consume', getDailyFoodConsumed)
foodConsumedRoutes.put('/consume/:uniqueId', updateDailyFoodConsumed)

export default foodConsumedRoutes