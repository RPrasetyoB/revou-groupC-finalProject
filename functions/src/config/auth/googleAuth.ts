import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { googleLogin } from '../../controllers/googleController';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: 'https://group-c-project.onrender.com/v1/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const result = await googleLogin(profile);
        if (result?.success) {
          const user = {user: result.user, token: result.token}
          done(null, user);
        }
      } catch (error: any) {
        console.error('Error during Google authentication:', error);
        done(error as Error, null!);
      }
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user as any);
});

export default passport;