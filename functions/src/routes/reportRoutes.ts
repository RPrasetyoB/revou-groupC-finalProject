import express from 'express'
import authentication from '../middlewares/authentication'
import { createUpdateReportDaily, getReportDaily, getReportHistory } from '../controllers/reportController'

const reportRoutes = express.Router()

reportRoutes.post('/report', authentication, createUpdateReportDaily)
reportRoutes.get('/report', authentication, getReportDaily)
reportRoutes.get('/all-report', authentication, getReportHistory)

export default reportRoutes








