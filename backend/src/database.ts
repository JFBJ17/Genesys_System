import { createPool } from 'mysql2/promise';
import keys from './keys'

const connection = async () => {
    try {
        const connect = await createPool(keys);
        return connect;
    } catch (error) {
        throw new Error("Erorr en: " + error)
    }
}

export default connection;