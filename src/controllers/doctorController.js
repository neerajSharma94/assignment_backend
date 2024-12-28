import Measurement from "../models/Measurement.js";
import Patient from "../models/Patient.js";

const getPatient = async (req, res) => {
    console.log("req", req.user);
    if (!["nurse", "doctor"].includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden" });
    }
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const getPatientMeasurements = async (req, res) => {
    if (!["nurse", "doctor"].includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden" });
    }
    try {
        const patientId = req.params.patientId;
        const measurements = await Measurement.find({ patientId });
        res.json(measurements);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export { getPatient, getPatientMeasurements };
