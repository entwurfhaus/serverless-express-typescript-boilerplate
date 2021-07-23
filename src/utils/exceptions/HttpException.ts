class HttpException extends Error {
    errorCode?: string | number;
    statusCode?: number;
    errors?: any;
  
    constructor(statusCode: number = 400, message: string = 'Bad Request', errors?: any, errorCode?: string | number) {
      super(message);
  
      this.statusCode = statusCode;
      if (errors) {
        this.errors = errors;
      }
      if (errorCode) {
        this.errorCode = errorCode;
      }
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, HttpException);
      }
    }
  }
  
  export default HttpException;