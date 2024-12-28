import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI;
        if (!url) {
            console.log("oops! url not found to connect with monogodb.");
        }
        await mongoose.connect(url);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
