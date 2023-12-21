import mongoose from "mongoose";

import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB_CONNECTION_ERROR: ", error);
    process.exit(1);
  }
};

export default connectDB;
