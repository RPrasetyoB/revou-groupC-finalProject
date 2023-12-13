import ErrorCatch from "../utils/errorCatch";
import { prisma } from "../config/db/db.connection";

export const verifyEmail = async (verificationToken: string) => {
    try {  
        await prisma.$connect
      const user = await prisma.user.findFirst({ where: { verificationToken: verificationToken } });
  
      if (!user) {
        throw new ErrorCatch({
          success: false,
          message: 'Invalid verification token.',
          status: 403
        });
      }
      await prisma.user.update({
          where: { id: user.id },
          data: { isEmailVerified: true, verificationToken: null },
        });
        console.log('user', user )
      return {
        success: true,
        message: 'Email verified successfully.',
      };
    } catch (error: any) {
      console.error(error);
      throw new ErrorCatch({
        success: false,
        message: error.message,
        status: error.status,
      });
    } finally {
      await prisma.$disconnect();
    }
  };