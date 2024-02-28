import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("database connected");
  } catch (error) {
    console.log("error connection to mongodb", error.message);
  }
};

export default connectToMongoDB;
