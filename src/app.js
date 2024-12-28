import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import swaggerDocs from "./config/swagger.js";
import adminRoutes from "./routes/adminRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import hospitalStaffRoutes from "./routes/hospitalStaff.js";
import nurseRoutes from "./routes/nurseRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev")); // HTTP request logging
app.use(helmet()); // Security middleware

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/staff", hospitalStaffRoutes);
app.use("/api/nurse", nurseRoutes);
app.use("/api/doctor", doctorRoutes);

app.get("/", (_, res) => {
    res.status(200).json({
        message: "Welcome to the Role-Based Login System API",
    });
});

export default app;
