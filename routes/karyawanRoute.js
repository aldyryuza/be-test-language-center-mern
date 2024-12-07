import express from "express";
import {
    getAllData,
    getDataById,
    saveData,
    updateData,
    deleteData
} from "../controller/karyawanController.js";


const router = express.Router();

router.get('/karyawan', getAllData);
router.get('/karyawan/:id', getDataById);
router.post('/karyawan', saveData);
router.patch('/karyawan/:id', updateData);
router.delete('/karyawan/:id', deleteData);

export default router;