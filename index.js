const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

const news = require('./data/news.json');
const categories = require('./data/categories.json');



app.get('/', (req, res) => {
    res.send('Bismillahir Rahmanir Rahim');
});

app.get('/news', (req, res) => {
    res.send(news);
});

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const singleNews = news.find(n => n._id === id);
    res.send(singleNews);
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if(id === 0) res.send(news);
    else {
        const singleCategory = news.filter(category => parseInt(category.category_id) === id);
        res.send(singleCategory);
    }

});

app.listen(port, () => console.log(`Server is running from: ${port}`));