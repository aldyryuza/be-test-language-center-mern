import karyawanModel from "../models/karyawanModel.js";

export const getAllData = async (req, res) => {
    try {
        const datas = await karyawanModel.find();
        res.status(200).json(datas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getDataById = async (req, res) => {
    try {
        const data = await karyawanModel.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const saveData = async (req, res) => {
    const data = new karyawanModel(req.body);
    try {
        const inserteddata = await data.save();
        res.status(201).json(inserteddata);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateData = async (req, res) => {
    try {
        const updateddata = await karyawanModel.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateddata);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteData = async (req, res) => {
    try {
        const deletedUser = await karyawanModel.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};