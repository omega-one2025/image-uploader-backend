import { Request, Response } from 'express';
import { Operation } from 'express-openapi';

export const get: Operation = (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript + MongoDB Atlas!');
};

get.apiDoc = {
  description: 'Health Check Endpoint',
  tags: ['Root'],
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: { type: 'string', example: 'Hello from Express + TypeScript + MongoDB Atlas!' },
        },
      },
    },
  },
};
