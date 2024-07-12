import mongoose from "mongoose";
import "dotenv/config";

const databaseUrl = process.env.DATABASEURL;
const DBconnect = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};

export default DBconnect;
