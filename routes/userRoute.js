import express from "express";
import {
    getAllUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
} from "../controller/userController.js";


const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;