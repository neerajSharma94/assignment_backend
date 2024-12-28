import express from "express";
import { addAdmin } from "../controllers/adminController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.use(authMiddleware);

/**
 * @swagger
 * /admin/addHospitalAdmin:
 *   post:
 *     summary: Add a new Hospital Admin user
 *     description: Allows Hospital Admins to add new Hospital Admin users
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Username for the new Hospital Admin
 *                 required: true
 *               password:
 *                 type: string
 *                 description: Password for the new Hospital Admin
 *                 required: true
 *     responses:
 *       201:
 *         description: Hospital Admin added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *       403:
 *         description: Forbidden (unauthorized access)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 */
router.post("/addHospitalAdmin", addAdmin);

export default router;
