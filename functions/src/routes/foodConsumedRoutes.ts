import express from 'express'
import { createDailyFoodConsumed, deleteDailyFoodConsumed, getAllFoodConsumedHistory, getDailyFoodConsumed, updateDailyFoodConsumed } from '../controllers/foodConsumedController'
import authentication from '../middlewares/authentication'

const foodConsumedRoutes = express.Router()

foodConsumedRoutes.post('/consume', authentication, createDailyFoodConsumed)
foodConsumedRoutes.get('/consume', authentication, getDailyFoodConsumed)
foodConsumedRoutes.get('/all-consume', authentication, getAllFoodConsumedHistory)
foodConsumedRoutes.put('/consume/:uniqueId', authentication, updateDailyFoodConsumed)
foodConsumedRoutes.delete('/consume/:uniqueId', authentication, deleteDailyFoodConsumed)

export default foodConsumedRoutes