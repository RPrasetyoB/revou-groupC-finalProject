import * as cron from 'node-cron';
import { postTodayReport } from './reportService';
import { prisma } from '../config/db/db.connection';

const cronStart = () => {
    cron.schedule('47 23 * * *', async () => {
      try {
        const getAllUsers = await prisma.user.findMany();
  
        for (const user of getAllUsers) {
          await postTodayReport(user.id);
        }  
        console.log('Reports generated successfully.');
      } catch (error) {
        console.error('Error generating reports:', error);
      }
    });
  };
  
  export { cronStart };