import express from 'express'
import authentication from '../middlewares/authentication'
import { createUpdateMeditationDaily, getAllMeditationHistory, getMeditationDaily } from '../controllers/meditationController'

const meditationRoutes = express.Router()

meditationRoutes.post('/meditation', authentication, createUpdateMeditationDaily)
meditationRoutes.get('/meditation', authentication, getMeditationDaily)
meditationRoutes.get('/all-meditation', authentication, getAllMeditationHistory)

export default meditationRoutes