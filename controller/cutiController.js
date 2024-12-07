import cutiModel from "../models/cutiModel.js";

export const getAllData = async (req, res) => {
    try {
        // Mengambil semua data cuti dan memuat data karyawan terkait
        const datas = await cutiModel.find().populate({
            path: "id_karyawan", // Nama field relasi di model Cuti
            select: "name email username jenis_kelamin no_hp alamat", // Pilih field yang ingin ditampilkan
        });

        res.status(200).json(datas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getDataById = async (req, res) => {
    try {
        // Cari data berdasarkan ID dan populate data karyawan
        const data = await cutiModel
            .findById(req.params.id)
            .populate({
                path: "id_karyawan", // Nama field relasi di model Cuti
                select: "name email username jenis_kelamin no_hp alamat", // Field yang ingin diambil
            });

        if (!data) {
            return res.status(404).json({ message: "Data cuti tidak ditemukan" });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const saveData = async (req, res) => {
    try {
        // Ambil data dari request body
        const { keterangan, tanggal_awal, tanggal_akhir, id_user } = req.body;

        // Validasi data
        if (!keterangan || !tanggal_awal || !tanggal_akhir || !id_user) {
            return res.status(400).json({ message: "Semua field wajib diisi!" });
        }

        // Buat instance model
        const data = new cutiModel({
            id_karyawan: id_user, // Menghubungkan ke id_karyawan
            keterangan,
            tanggal: {
                awal: new Date(tanggal_awal), // Format tanggal awal
                akhir: new Date(tanggal_akhir), // Format tanggal akhir
            },
        });

        // Simpan data ke database
        const insertedData = await data.save();
        res.status(201).json(insertedData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const updateData = async (req, res) => {
    try {
        const updateddata = await cutiModel.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateddata);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteData = async (req, res) => {
    try {
        const deletedUser = await cutiModel.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};