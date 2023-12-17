import express from 'express'
import authentication from '../middlewares/authentication'
import { createUpdateStepsDaily, getAllStepsHistory, getStepsDaily } from '../controllers/stepsController'

const stepsRoutes = express.Router()

stepsRoutes.post('/steps', authentication, createUpdateStepsDaily)
stepsRoutes.get('/steps', authentication, getStepsDaily)
stepsRoutes.get('/all-steps', authentication, getAllStepsHistory)

export default stepsRoutes