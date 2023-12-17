import express from 'express';
import userRoutes from './userRoutes';
import authRoutes from './authRoutes';
import authentication from '../middlewares/authentication';
import caloriesRoutes from './caloriesRoutes';
import foodConsumedRoutes from './foodConsumedRoutes';
import waterRoutes from './waterRoutes';
import stepsRoutes from './stepsRoutes';

const routes = express.Router()

routes.use('/v1', authRoutes);
routes.use('/v1', userRoutes);
routes.use('/v1', caloriesRoutes);
routes.use('/v1', foodConsumedRoutes);
routes.use('/v1', waterRoutes);
routes.use('/v1', stepsRoutes);

export default routes