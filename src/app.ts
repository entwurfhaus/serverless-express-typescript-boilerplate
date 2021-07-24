'use strict';
import express from 'express';
// import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

// --EDIT THIS--
import demo from 'controllers/demo';

// Initialize server
const app = express();

// Add express middelware(s)
app.use(helmet());
app.use(cors());
// app.use(compression());
app.use(express.json());

// Initialize api routes
app.use('/', demo);
app.use(express.static('src/public'));

export default app;