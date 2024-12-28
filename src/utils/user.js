import bcryptjs from "bcryptjs";
import User from "../models/User.js";

const hashPassword = async (pw) => {
    return await bcryptjs.hash(pw, 10);
};

const createUser = async ({ username, password, role }) => {
    const hashedPassword = await hashPassword(password);
    const newDoctor = new User({
        username,
        password: hashedPassword,
        role,
    });
    const res = await newDoctor.save();
    return res;
};

export { createUser, hashPassword };
