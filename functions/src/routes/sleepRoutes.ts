import express from 'express'
import authentication from '../middlewares/authentication'
import { createUpdateSleepDaily, getAllSleepHistory, getSleepDaily } from '../controllers/sleepController'

const sleepRoutes = express.Router()

sleepRoutes.post('/sleep', authentication, createUpdateSleepDaily)
sleepRoutes.get('/sleep', authentication, getSleepDaily)
sleepRoutes.get('/all-sleep', authentication, getAllSleepHistory)

export default sleepRoutes