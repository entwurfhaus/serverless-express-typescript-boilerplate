'use strict';
import express from 'express';
// import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
// import bearerToken from 'express-bearer-token';
import handleError from 'utils/middleware/handleException';

// --EDIT HERE--
import demo from 'controllers/demo';

// Initialize server and standard middleware
const app = express();
app.use(helmet());
app.use(cors());
// app.use(compression());
app.use(express.json());
// app.use(bearerToken());

// Initialize api routes
app.use('/', demo);
app.use(express.static('src/public'));

app.use(handleError());

export default app;