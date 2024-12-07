import mongoose from "mongoose";


const KaryawanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,  // If it's optional, set it to false
        unique: true,     // Set to true if you want to enforce uniqueness
        sparse: true      // Allows null or missing values without conflicting with the unique index
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
    jenis_kelamin: {
        type: String,
        required: true,
    },
    no_hp: {
        type: String,
        required: true,
    },
    alamat: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: String,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Karyawan = mongoose.model("Karyawan", KaryawanSchema);

export default Karyawan;