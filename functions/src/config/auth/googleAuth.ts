// Import dotenv to use environment variables
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
      callbackURL: 'http://localhost:4000/v1/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        await googleLogin(profile);

        done(null, { temporaryId: profile.id });
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