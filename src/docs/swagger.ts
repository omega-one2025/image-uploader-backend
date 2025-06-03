import { initialize } from 'express-openapi';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import * as path from 'path';

export const initializeSwaggerDoc = (app: Express, port: number | string) => {
  const apiDoc = {
    openapi: '3.0.0',
    info: {
      title: 'Express + TypeScript + MongoDB Atlas API',
      version: '1.0.0',
      description: 'API documentation for the Express + TypeScript + MongoDB Atlas application.',
    },
    paths: {},
  };

  initialize({
    app,
    apiDoc,
    paths: path.join(__dirname, '../routes'),
  });

  app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerUrl: `http://localhost:${port}/api-docs`,
    })
  );
};
