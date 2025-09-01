//To keep API responses consistent and predictable.

import type { Response } from  "express";

export function sendError(res : Response, status: number, message: string){
    res.status(status).json({ error: message});
}