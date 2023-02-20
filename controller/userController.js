import User from "../model/User.js";
import { generateHash, compareHash } from "../utils/auth.js";

export const readUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            const authenticateUser = await compareHash(password, user.password)
            if (authenticateUser === true) {
                res.sendStatus(200)
            } else {
                res.sendStatus(401)
            }
        } else {
            res.sendStatus(404)
        }
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req, res, next) => {
    const { fname, lname, mobno, email, password } = req.body;
    const passwordHash = await generateHash(password)
    if (passwordHash) {
        try {
            const user = await User.create({
                fname: fname,
                lname: lname,
                mobno: mobno,
                email: email,
                password: passwordHash
            });
            res.sendStatus(201)
        } catch (error) {
            next(error);
        }
    }
};
