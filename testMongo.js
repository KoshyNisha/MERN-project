import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI not defined");

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Successfully connected to MongoDB!");
    await mongoose.connection.close(); // Close connection after test
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
};

testConnection();
