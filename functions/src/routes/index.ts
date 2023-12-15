import express from 'express';
import userRoutes from './userRoutes';
import authRoutes from './authRoutes';
import authentication from '../middlewares/authentication';
import caloriesRoutes from './caloriesRoutes';
import foodConsumedRoutes from './foodConsumedRoutes';

const routes = express.Router()

routes.use('/v1', authRoutes);
routes.use('/v1', userRoutes);
routes.use('/v1', caloriesRoutes);
routes.use('/v1', foodConsumedRoutes);

export default routes