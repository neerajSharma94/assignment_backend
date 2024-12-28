import Measurement from "../models/Measurement.js";
import Patient from "../models/Patient.js";

const addPatient = async (req, res) => {
    try {
        if (!["nurse", "doctor"].includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden" });
        }
        const { name, age, gender, height, weight, temperature } = req.body;
        const newPatient = new Patient({
            name,
            age,
            gender,
            height,
            weight,
            temperature,
        });
        await newPatient.save();

        res.status(201).json({ message: "Patient added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const addMeasurement = async (req, res) => {
    try {
        if (!["nurse", "doctor"].includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden" });
        }
        const { patientId, timestamp, heartRate } = req.body;
        const newMeasurement = new Measurement({
            patientId,
            timestamp,
            heartRate,
        });
        await newMeasurement.save();

        res.status(201).json({ message: "Measurement added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export { addMeasurement, addPatient };
