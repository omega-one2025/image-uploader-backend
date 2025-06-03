import request from 'supertest';
import express from 'express';
import { initialize } from 'express-openapi';
import path from 'path';

describe('Health Check Api', () => {
  let app: express.Express;

  beforeEach(async () => {
    app = express();

    await initialize({
      app,
      apiDoc: {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          version: '1.0.0',
        },
        paths: {},
      },
      paths: path.join(__dirname, '../dist/routes'),
    });
  });

  it('GET / should return 200 with message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello from Express + TypeScript + MongoDB Atlas!'); // match your actual route response
  });
});
