import express from 'express'
import { createUpdateWaterDaily, getAllWaterHistory, getWaterDaily } from '../controllers/waterController'
import authentication from '../middlewares/authentication'

const waterRoutes = express.Router()

waterRoutes.post('/water', authentication, createUpdateWaterDaily)
waterRoutes.get('/water', authentication, getWaterDaily)
waterRoutes.get('/all-water', authentication, getAllWaterHistory)

export default waterRoutes