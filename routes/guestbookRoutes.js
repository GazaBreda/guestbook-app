
import express from 'express';
const router = express.Router();

// an array to temporarily store our form data
let data = [];

router.get('/route', (req, res) => {
    res.json({ message: 'Hello Welcome to our first route' });
});

 //guestbook route that shows a simple HTML form for submitting a message
router.get( '/guestbook',  (req, res) => {
    res.send(`
        <h1>Guest Book</h1>
        <form method="POST" action="/guestbook">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required><br><br>
          <button type="submit">Sign Up</button>
        </form>
      `);
    });

//a POST /guestbook route that stores the name and message in an array
router.post('/guestbook', (req, res) => {
    const { name, message } = req.body;
    data.push({ name, message });
    res.json

//a get /messages route that returns all guestbook entries in JASON format

export default router;
