// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Example API Endpoint for Products
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 15.49 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
