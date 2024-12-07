import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session"; // Import express-session

import connectDB from "./config/db.js";

// Import Routes
import UserRoute from "./routes/userRoute.js";
import KaryawanRoute from "./routes/karyawanRoute.js";
import CutiRoute from "./routes/cutiRoute.js";
import AuthRoute from "./routes/authRoute.js";

// Inisialisasi aplikasi
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Panggil koneksi database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Konfigurasi middleware untuk session
app.use(session({
    secret: process.env.SESSION_SECRET || "your-secret-key", // Ganti dengan secret yang aman
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Setel `secure: true` jika menggunakan HTTPS
}));

// Routes
app.use(UserRoute);
app.use(KaryawanRoute);
app.use(CutiRoute);
app.use("/auth", AuthRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
