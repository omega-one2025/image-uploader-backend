import express from 'express';
import cors from 'cors';
import { initializeSwaggerDoc } from './docs/swagger';
import dotenv from 'dotenv';
import chalk from 'chalk';

import connectDB from './config/db';
import logger from './middleware/logger';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Swagger Setup
initializeSwaggerDoc(app, PORT);

// Connect to MongoDB first, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(chalk.green.bold(`✔ Server is running on port ${PORT}`));
    console.log(
      chalk.blueBright.bold(
        `ℹ Swagger documentation: ${chalk.underline(`http://localhost:${PORT}/api-docs`)}`
      )
    );
  });
});

export default app;
