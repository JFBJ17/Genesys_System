import bcrypt from 'bcryptjs'

export const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

export const matchPassword = async (password: string, savedPassword: string) => {
    try {
        return await bcrypt.compare(password, savedPassword);
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
}