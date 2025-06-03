import { Request, Response } from 'express';
import { Operation } from 'express-openapi';

export const get: Operation = (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript + MongoDB Atlas!');
};

get.apiDoc = {
  description: 'Root GET endpoint',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: { type: 'string' },
            },
          },
        },
      },
    },
  },
};
