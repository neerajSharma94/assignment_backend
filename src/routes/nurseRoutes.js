import express from "express";
import { addMeasurement, addPatient } from "../controllers/nurseController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

/**
 * @swagger
 * /nurse/addPatient:
 *   post:
 *     summary: Add a new patient
 *     tags: [Patient Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *                 format: int32
 *               gender:
 *                 type: string
 *     responses:
 *       201:
 *         description: Patient added successfully
 *       400:
 *         description: Invalid input
 */
router.post("/addPatient", addPatient);

/**
 * @swagger
 * /nurse/addMeasurement:
 *   post:
 *     summary: Add measurement data for a patient
 *     tags: [Patient Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: string
 *               heartRate:
 *                 type: number
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Measurement added successfully
 *       400:
 *         description: Invalid input
 */
router.post("/addMeasurement", addMeasurement);

export default router;
