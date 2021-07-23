import serverless from 'serverless-http';
import app from './src/app';

export const api = serverless(app, {
  basePath: '/api',
});