import { RequestHandler } from 'express';

// Database
import connect from '../../database';

export const addCriterio: RequestHandler = async (req, res) => {
    try {
        const conn = await connect();
        await conn.query('INSERT INTO criterio SET ?', [req.body]);
        res.json({ message: 'Agregado exitosamente' });
    } catch (error) {
        console.error(error);
    }
}

export const allCriterio: RequestHandler = async (req, res) => {
    try {
        const conn = await connect();
        const [rows]: any = await conn.query('SELECT * FROM criterio');
        res.json(rows);
    } catch (error) {
        console.error(error);
    }
}

export const deleteCriterio: RequestHandler = async (req, res) => {
    try {
        const conn = await connect();
        await conn.query('DELETE FROM criterio WHERE id_Criterio = ?', [req.params.id]);
        res.json({ message: 'Se elimino con exito' });
    } catch (error) {
        console.error(error)
    }
}

export const editCriterio: RequestHandler = async (req, res) => {
    try {
        const conn = await connect();
        await conn.query('UPDATE criterio SET ? WHERE id_Criterio = ?', [req.body, req.params.id]);
        res.json({ message: 'Se actualizo con exito' });
    } catch (error) {
        console.error(error);
    }
}