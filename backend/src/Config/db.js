import mongoose from "mongoose";

const databaseUrl = process.env.databaseUrl;
const DBconnect = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};

export default DBconnect;
