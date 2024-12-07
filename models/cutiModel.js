import mongoose from "mongoose";

const CutiSchema = new mongoose.Schema({
    id_karyawan: {
        type: mongoose.Schema.Types.ObjectId, // Referensi ke model Karyawan
        ref: "Karyawan",
        required: true,
    },
    keterangan: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },
    tanggal: {
        awal: { type: Date, required: true },
        akhir: { type: Date, required: true },
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

const Cuti = mongoose.model("Cuti", CutiSchema);

export default Cuti;
