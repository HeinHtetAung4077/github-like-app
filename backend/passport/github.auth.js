import passport from "passport";

import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

// * Passport session setup.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// * Use the GitHubStrategy within Passport.
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "https://github-like-app-d6kq.onrender.com/api/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...

      const user = await User.findOne({ username: profile.username });

      //*SignUp
      if (!user) {
        const newUser = new User({
          name: profile.displayName,
          username: profile.username,
          profileUrl: profile.profileUrl,
          avatarUrl: profile.photos[0].value,
          likedProfiles: [],
          likedBy: [],
        });
        await newUser.save();
        done(null, newUser);
      } else {
        done(null, user);
      }
    }
  )
);
