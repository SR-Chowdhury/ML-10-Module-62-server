const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

const categories = require('./data/categories.json');


app.get('/', (req, res) => {
    res.send('Bismillahir Rahmanir Rahim');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.listen(port, () => console.log(`Server is running from: ${port}`));