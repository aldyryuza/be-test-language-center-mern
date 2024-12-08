import mongoose from "mongoose";

const connectDB = async () => {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/test-language-center";
    try {
        await mongoose.connect(uri); // Tidak perlu opsi tambahan
        console.log("Database connection successful");
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    }
};

export default connectDB;
