import app from './app';
import * as http from 'http';
import * as dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB first, then start server
connectDB().then(() => {
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
