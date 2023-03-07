import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import swaggerUI from 'swagger-ui-express';

import './containers';
import { ErrorResponse } from './middlewares/ErrorReponse';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use(router);

app.use(ErrorResponse);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

export { app };
