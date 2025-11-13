import 'reflect-metadata';

import express from 'express';
import type { Request, Response } from 'express';
import logger from './config/logger.js';
import { HttpError } from 'http-errors';
import authRouter from './routes/auth.js';

const app = express();

app.get('/', async (req, res) => {
  res.send('Welcome to Auth service');
});

app.use('/auth', authRouter);

app.use((err: HttpError, req: Request, res: Response) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: [
      {
        type: err.name,
        msg: err.message,
        path: '',
        location: '',
      },
    ],
  });
});

export default app;
