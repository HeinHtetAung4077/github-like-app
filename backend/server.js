import express from "express";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import exploreRoutes from "./routes/explore.route.js";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./db/connectMongoDB.js";
import "./passport/github.auth.js";
import session from "express-session";
import passport from "passport";

const app = express();
dotenv.config();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is ready!!");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/explore", exploreRoutes);

app.listen("5000", () => {
  console.log("Server is running on port 5000!!");
  connectMongoDB();
  console.log("After ");
});
