import express from 'express'
import authentication from '../middlewares/authentication'
import { createUpdateMoodDaily, getAllMoodHistory, getMoodDaily } from '../controllers/moodController'

const moodRoutes = express.Router()

moodRoutes.post('/mood', authentication, createUpdateMoodDaily)
moodRoutes.get('/mood', authentication, getMoodDaily)
moodRoutes.get('/all-mood', authentication, getAllMoodHistory)

export default moodRoutes