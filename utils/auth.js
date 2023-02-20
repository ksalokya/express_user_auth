import bcrypt from "bcrypt";

export const compareHash = async (password, hash) => {
    return bcrypt.compare(password, hash);
}

export const generateHash = async (password) => {
    return bcrypt.hash(password, process.env.SALT_ROUNDS)
}
