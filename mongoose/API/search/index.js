const express = require("express");
require("./config");
const Product = require("./product");

const app = new express();
app.use(express.json());


// here we search the data using one or more multiple field.
app.get('/search/:key', async (req, res) => {
    let data = await Product.find({
      $or: [
        {
          name: { $regex: req.params.key }   // single key ko hi search karege 

          // multiple key ko search karega jaise yaha 'name and category' ko search 
          // jo match karega dono me se ek me bhi usko le lega
            
          //   name: { $regex: req.params.key },
          //   category: { $regex: req.params.key }
        },
      ],
    });
    res.send(data)
})

app.listen(4200);
