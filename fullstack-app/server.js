const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
];

// Endpoint 1: Retrieve a list of items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Endpoint 2: Add a new item to the list
app.post('/api/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
