import express from "express";
import { addStaff, getStaff } from "../controllers/hospitalStaffController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

/**
 * @swagger
 * /staff:
 *   post:
 *     summary: Add a new doctor
 *     tags: [User Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Doctor added successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", addStaff);

/**
 * @swagger
 * /staff:
 *   post:
 *     summary: Add a new doctor
 *     tags: [User Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Doctor added successfully
 *       400:
 *         description: Invalid input
 */
router.get("/", getStaff);
export default router;
