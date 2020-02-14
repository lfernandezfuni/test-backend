import { Request, Response } from 'express';
import { db } from '../db';

// import { logger } from 'wraps-logger';

export async function getAllGrupos (req: Request, res: Response) {
    const result = await db.query (`SELECT id_grupo, nombre, id_estilo FROM grupos`);
    res.status(200).send(result.rows);
}

export async function getGrupo (req: Request, res: Response) {
    res.status(200).send({id_grupo: 0,
    nombre: 'NOT IMPLEMENTED',
    id_estilo: 0});
}

export async function updateGrupo (req: Request, res: Response) {
    res.status(500).send({error: 'NOT IMPLEMENTED'});
}
