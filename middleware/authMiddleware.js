import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization; // Ambil token dari header
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        // Verifikasi token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Simpan data user ke request untuk digunakan di route
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid or expired token." });
    }
};

export default authenticateToken;
