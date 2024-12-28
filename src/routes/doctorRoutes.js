import express from "express";
import {
    getPatient,
    getPatientMeasurements,
} from "../controllers/doctorController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

/**
 * @swagger
 * /doctor/patients:
 *   get:
 *     summary: Get a list of all patients
 *     tags: [Patient Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of patients
 *       500:
 *         description: Internal server error
 */
router.get("/patients", getPatient);

/**
 * @swagger
 * /doctor/patient/measurements/{patientId}:
 *   get:
 *     summary: Get patient measurements
 *     tags: [Patient Management]
 *     parameters:
 *       - in: path
 *         name: patientId
 *         required: true
 *         description: ID of the patient
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patient measurements retrieved
 *       404:
 *         description: Patient not found
 */
router.get("/patient/measurements/:patientId", getPatientMeasurements);

export default router;
