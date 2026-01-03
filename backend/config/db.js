import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // UPDATED: Hardcoded local connection string
    // This connects to your local MongoDB on port 27017
    // It will automatically create a database named "finance-tracker"
    const uri = "mongodb://localhost:27017/finance-tracker";

    await mongoose.connect(uri, {}); 
    
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;