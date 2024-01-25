const express = require("express");
require("./config");
const Product = require("./product");

const app = new express();
app.use(express.json());


// here we search the data using one or more multiple field.
app.get('/search/:key', async (req, res) => {
    let data = await Product.find({
        "$or":[
            { 'name': {$regex: req.params.key}}
        ]
    })
    res.send(data)
})

app.listen(4200);
