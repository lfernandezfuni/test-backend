import { Request, Response } from 'express';
import { db } from '../db';

// import { logger } from 'wraps-logger';

export async function getEstilo(req: Request, res: Response) {
    const id: string = req.params.id;
    res.status(200).send({
        id_estilo: 1,
        nombre: 'No definido',
        class: 'badge-danger'
    });
}


export async function getAllEstilos(req: Request, res: Response) {
    const result = await db.query(`SELECT nombre, class FROM estilos`);
    res.status(200).send(result.rows);
}
