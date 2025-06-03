import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(chalk.magenta.bold(`✔ MongoDB Connected: ${conn.connection.host}`));
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit on failure
  }
};

export default connectDB;
