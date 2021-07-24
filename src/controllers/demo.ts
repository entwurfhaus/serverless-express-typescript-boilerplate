import { Request, Response, NextFunction, Router } from 'express';
import { outputDebug } from 'helpers/console';
import { createError } from 'http-errors';

const route = Router();

/**
 * Say hello.
 * 
 */
route.get('/hello', async (req: Request, res: Response, next: NextFunction) => {
  outputDebug('Say hello!', req);
  
  try {
    res.status(200).json({
      "message": "Hello there!"
    });
  } catch (e) {
    next(createError(500, `I can't say hello, please help.`));
  }
});

/**
 * Send an echo.
 * 
 */
route.post('/echo', async (req: Request, res: Response, next: NextFunction) => {
  outputDebug('An echo has been heard', req);

  try {
    res.status(200).json({
      "message": req.body
    });
  } catch (e) {
    next(createError(500, `I can't echo back, please help.`));
  }
});

export default route;