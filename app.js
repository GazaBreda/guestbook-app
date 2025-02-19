import express from 'express';
import guestbookRoutes from './routes/guestbookRoutes.js';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use guestbook routes
app.use('/', guestbookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
