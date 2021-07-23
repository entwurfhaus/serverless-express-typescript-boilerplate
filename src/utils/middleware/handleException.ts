import HttpException from 'utils/exceptions/HttpException';
import { Request, Response, NextFunction } from 'express';

import { ErrorResponse } from 'src/common/types';

const handleError = () => (err: HttpException, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    console.error(err);
    return next(err);
  }

  let response: ErrorResponse = {
    status: err.statusCode || 500,
    message: err.message || 'Server Error',
  };

  if (err.errors) {
    response.errors = err.errors;
  }

  if (err.errorCode) {
    response.code = err.errorCode;
  }

  console.error(response);
  return res.status(err.statusCode || 500).json({ error: response });
};

export default handleError;

/*
Using Google's standard error response format https://cloud.google.com/storage/docs/json_api/v1/status-codes
TODO: Improve custom error handling boilerplat. See https://expressjs.com/en/guide/error-handling.html
*/