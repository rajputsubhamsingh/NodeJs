const dbConnect = require('./mongodb')
const express = require('express')
const app = new express()

app.use(express.json())

// data ko read karne ke liye get api ka use karte hai. 
app.get('/', async (req, res) => {
    let data = await dbConnect()
    data = await data.find().toArray()
    res.send(data)
    // res.send({name: 'shubham'})
})

// database me data ko insert karne ke liye post api ka use karte hai.
// yaha hm api ke body ke through data ko insert karenge database me.
app.post('/', async (req, res) => { 
    let data = await dbConnect();
    let result = await data.insertOne(req.body);

    res.send(result);
})


app.listen(4200)