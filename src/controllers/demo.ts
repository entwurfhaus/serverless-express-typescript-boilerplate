import { Request, Response, NextFunction, Router } from 'express';

const route = Router();

/**
 * Say hello.
 * 
 */
route.get('/hello', async (req: Request, res: Response, next: NextFunction) => {
  if (process.env.DEBUG === 'true') {
    console.debug('Say hello!', req);
  }

  try {
    res.status(200).json({
      "message": "Hello there!"
    });
  } catch (e) {
    next(e);
  }
});

/**
 * Send an echo.
 * 
 */
route.post('/echo', async (req: Request, res: Response, next: NextFunction) => {
  if (process.env.DEBUG === 'true') {
    console.debug('An echo has been heard', req);
  }

  try {
    res.status(200).json({
      "message": req.body
    });
  } catch (e) {
    next(e);
  }
});

export default route;