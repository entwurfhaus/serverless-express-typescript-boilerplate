import { Request } from 'express';

/**
 * Use console.debug();
 * 
 * @param msg 
 * @param req 
 */
export const outputDebug = (msg: string, req: Request) => {
    if (process.env.DEBUG === 'true') {
        console.debug(msg, req);
    }
}

/**
 * Use console.error();
 * 
 * @param msg 
 * @param req 
 */
 export const outputError = (msg: string) => {
    if (process.env.DEBUG === 'true') {
        console.error(msg);
    }
}