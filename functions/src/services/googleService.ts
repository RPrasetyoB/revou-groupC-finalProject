import { prisma } from "../config/db/dbConnection";
import ErrorCatch from "../utils/errorCatch";

const findOrCreateGoogleUser = async (profile: {id: string, displayName: string, emails: { value: string }[]}) => {
  try {
    const user = await prisma.user.findUnique({
      where: { googleId: profile.id },
    });
    if (user) {
      return {
        success: true,
        message: "Login successfully",
        status: 200,
        data: {
          id: user.id,
          username: user.username,
        },
      };
    } else {
      const newUser = await prisma.user.create({
        data: {
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
        },
      });
      return {
        success: true,
        data: newUser,
      };
    }
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


export { findOrCreateGoogleUser }