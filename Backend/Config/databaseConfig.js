import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = () => {
   try {
      connect(process.env.MONGO_URL);
      console.log("Database connected")
   } catch (error) {
      console.log("Failed to connect database", error)
   };
};

export default connectDatabase;