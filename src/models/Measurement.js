import mongoose from "mongoose";

const measurementSchema = new mongoose.Schema({
    patientId: {
        type: Number,
        ref: "Patient",
        required: true,
    },
    heartRate: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Measurement", measurementSchema);
