const express = require('express');
require('./config');
const Product = require('./product');

const app = new express();

app.post('/create', (req, res) => {
    console.log(req.body);
    res.send('done')
});

app.listen(4200)