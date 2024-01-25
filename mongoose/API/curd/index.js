const express = require('express');
require('./config');
const Product = require('./product'); 


const app = new express();
app.use(express.json())

// insert data in mongoose
app.post('/create', async (req, res) => {
    let data = new Product(req.body)
    let result = await data.save()
    console.log(result);
    res.send(result)
});


// get data from mongoose
app.get('/list', async (req, res) => {
    let data = await Product.find()
    res.send(data)
})

// delete data from mongoose
// app.delete('/delete', async (req, res) => {
    // let data = await Product.deleteOne({ name: "s-6 ultra" });
//     res.send(data)
// })


// id ke through data ko delete karenge.
app.delete('/delete/:_id', async (req, res) => {
    let data = await Product.deleteOne(req.params);
    res.send(data)
})

// update data in mongoose
// app.put('/update/:_id', async (req, res) => {
//     console.log(req.params);
//     let data = await Product.updateOne(
//         { _id: req.params },
//         { $set: { name: 'poco m30', price: 10900 } }
//     )
//     res.send(data)
// })

// update by postman 
app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Product.updateOne(
    req.params,
    { $set: req.body }
  );
  res.send(data);
});

app.listen(4200)