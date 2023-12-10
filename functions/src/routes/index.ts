import express from 'express';
import userRoutes from './userRoutes';
import authRoutes from './authRoutes';
import todoRoutes from './waterRoutes';
import authentication from '../middlewares/authentication';
import foodRoutes from './caloriesRoutes';
import foodConsumedRoutes from './foodConsumedRoutes';

const routes = express.Router()

routes.use('/v1', authRoutes);
routes.use('/v1', userRoutes);
routes.use('/v1', foodRoutes);
routes.use('/v1', foodConsumedRoutes);
routes.use('/v1', authentication, todoRoutes);

export default routes