const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.send(`
    <h2>Welcome to the Login Portal</h2>
    <a href="/login">👉 Please Login Here!</a>
  `);
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`
    <h2>Login Successful 🎉</h2>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Password:</strong> ${password}</p>
    <a href="/login">🔁 Try Again</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
