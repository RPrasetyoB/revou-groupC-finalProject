import * as schedule from 'node-schedule';
import { postTodayReport } from './reportService';
import { prisma } from '../config/db/dbConnection';

const scheduleStart = () => {
  process.env.TZ = 'Asia/Jakarta';

  schedule.scheduleJob('0 22 * * *', async () => {
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

export { scheduleStart };