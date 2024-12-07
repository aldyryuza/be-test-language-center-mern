import express from "express";
import {
    getAllData,
    getDataById,
    saveData,
    updateData,
    deleteData
} from "../controller/cutiController.js";


const router = express.Router();

router.get('/cuti', getAllData);
router.get('/cuti/:id', getDataById);
router.post('/cuti', saveData);
router.patch('/cuti/:id', updateData);
router.delete('/cuti/:id', deleteData);

export default router;