import User from "../models/User.js";
import { createUser } from "../utils/user.js";

const addStaff = async (req, res) => {
    if (!["admin", "hospital admin"].includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden" });
    }
    try {
        const { username, password, role } = req.body;
        if (!["doctor", "nurse"].includes(role)) {
            res.status(400).json({ message: "Invalid role." });
        }
        await createUser({
            username,
            password,
            role,
        });

        res.status(201).json({ message: "Staff added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const getStaff = async (req, res) => {
    if (!["admin", "hospital admin"].includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden" });
    }

    try {
        const data = await User.find(
            {
                role: ["doctor", "nurse"],
            },
            { password: 0 }
        );
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export { addStaff, getStaff };
