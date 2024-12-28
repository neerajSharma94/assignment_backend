import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    height: { type: Number },
    weight: { type: Number },
    temperature: { type: Number },
    timestamp: { type: Date, default: Date.now },
});

// Apply auto-increment plugin
patientSchema.plugin(AutoIncrement(mongoose), { inc_field: "patientId" });

export default mongoose.model("Patient", patientSchema);
