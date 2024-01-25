const dbConnect = require('./mongodb')
const express = require('express')
const mongodb = require('mongodb')
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

// app.put('/', async (req, res) => {
//     let data = await dbConnect();
//     let result = data.updateOne(
//         // { name: 's-4 ultra'},   // static condition
//         // {$set: { price: 1240}}

//         // dynamic condition
//         { name: req.body.name},
//         {$set: req.body}
//         )
//     res.send({result: 'update'})
// })


// agar hm name bhi change karna to uske liye params ka use karenge
// http://localhost:4200/s-4 ultra        name: s-4 ultra  isko ab hm url se acces karke easily badal skte hai.  
app.put('/:name', async (req, res) => {
    let data = await dbConnect();
    let result = data.updateOne( 
        { name: req.params.name},
        {$set: req.body}
        )
    res.send({status: 'update'})
})

app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    let data = await dbConnect()
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(4200)