import mongoose from "mongoose";

export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.GITHUB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error in connecting to MongoDB", error);
  }
}
