import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) { // 🔹 Use "error" instead of "eror"
        console.error("MongoDB connection error:", error.message);
    }
};
