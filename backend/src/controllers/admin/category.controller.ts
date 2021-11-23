import { RequestHandler } from 'express';

// Database
import connect from '../../database';

export const addCategory: RequestHandler = async (req, res) => {
    try {
        const conn = await connect();
        await conn.query('INSERT INTO categoria SET ?', [req.body]);
        res.json({ message: 'Agregado exitosamente' });
    } catch (error) {
        console.error(error);
    }
}

export const allCategory: RequestHandler = async (req, res) => {
    try {
        const conn = await connect();
        const [rows]: any = await conn.query('SELECT * FROM categoria');
        res.json(rows);
    } catch (error) {
        console.error(error);
    }
}

export const deleteCategory: RequestHandler = async (req, res) => {
    try {
        const conn = await connect();
        await conn.query('DELETE FROM categoria WHERE id_Categoria = ?', [req.params.id]);
        res.json({ message: 'Se elimino con exito' });
    } catch (error) {
        console.error(error)
    }
}