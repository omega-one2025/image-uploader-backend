import { Request, Response } from 'express';
import { Operation } from 'express-openapi';

console.log('✔ index.ts loaded');

export const get: Operation = (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript + MongoDB Atlas!');
};

get.apiDoc = {
  description: 'Health Checking Backend',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'string',
            example: 'Hello from Express + TypeScript + MongoDB Atlas!',
          },
        },
      },
    },
  },
};
