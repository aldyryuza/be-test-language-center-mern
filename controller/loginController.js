import LoginModel from "../models/karyawanModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Fungsi untuk mendaftarkan pengguna baru
export const registerUser = async (req, res) => {
    try {
        const { name, username, password, email, alamat, no_hp, jenis_kelamin } = req.body;

        // Periksa apakah username sudah ada
        const existingUser = await LoginModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json("Username already exists");
        }

        // Hash password sebelum menyimpannya
        const hashedPassword = await bcrypt.hash(password, 10);

        // Buat user baru
        const newUser = new LoginModel({
            username,
            name,
            password: hashedPassword,
            email,
            alamat,
            no_hp,
            jenis_kelamin
        });

        await newUser.save();
        res.status(201).json("User registered successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fungsi untuk login pengguna
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Cari user berdasarkan username
        const user = await LoginModel.findOne({ username });
        if (!user) {
            return res.status(404).json("No record existed");
        }

        // Bandingkan password menggunakan bcrypt
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json("The password is incorrect");
        }


     // Buat token JWT untuk autentikasi
     const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET || 'TW5MjB8g0P',
        { expiresIn: "1h" }
    );

    const nama  = user.name;
    const id_user  = user._id;

    res.status(200).json({ message: "success", token, nama, id_user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
