import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,  // If it's optional, set it to false
        unique: true,     // Set to true if you want to enforce uniqueness
        sparse: true      // Allows null or missing values without conflicting with the unique index
    },
});

export default mongoose.model("User", UserSchema);
