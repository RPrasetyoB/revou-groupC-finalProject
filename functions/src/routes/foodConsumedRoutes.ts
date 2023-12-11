import express from 'express'
import { createDailyFoodConsumed, deleteDailyFoodConsumed, getDailyFoodConsumed, updateDailyFoodConsumed } from '../controllers/foodConsumedController'

const foodConsumedRoutes = express.Router()

foodConsumedRoutes.post('/consume', createDailyFoodConsumed)
foodConsumedRoutes.get('/consume', getDailyFoodConsumed)
foodConsumedRoutes.put('/consume/:uniqueId', updateDailyFoodConsumed)
foodConsumedRoutes.delete('/consume/:uniqueId', deleteDailyFoodConsumed)

export default foodConsumedRoutes