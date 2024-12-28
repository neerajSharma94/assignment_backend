import User from "../models/User.js";
import { hashPassword } from "../utils/user.js";

const addAdmin = async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Forbidden" });
        }

        const { username, password } = req.body;
        const hashedPassword = await hashPassword(password);
        const newHospitalAdmin = new User({
            username,
            password: hashedPassword,
            role: "hospital admin",
        });
        await newHospitalAdmin.save();

        res.status(201).json({
            message: "Hospital Admin added successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export { addAdmin };
