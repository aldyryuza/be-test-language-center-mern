import express from "express";
import {
    loginUser,
    registerUser
} from "../controller/loginController.js";


const router = express.Router();

router.post('/login', loginUser);
router.post('/registrasi', registerUser);


export default router;