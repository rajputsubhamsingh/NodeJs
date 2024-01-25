const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
console.log("connected");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  
  const ProductModel = mongoose.model("products", productSchema);
  let data = new ProductModel({
    name: "M 30",
    price: 22400,
    brand: "samsung",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

// saveInDB();

const updateInDB = async () => {
    const Product = mongoose.model("products", productSchema);
    let data = await Product.updateOne(
      { name: "M 30" },
      {
        // $set: { price: 24000}
        $set: { name:'M 31', price: 24000 },
      }
    );
    console.log(data);
}


// updateInDB()

const deleteInDB = async () => {
    const Product = mongoose.model("products", productSchema);
    let data = await Product.deleteOne({name: 'M 31'})
    console.log(data);
}

// deleteInDB()

const findInDB = async () => {
    const Product = mongoose.model("products", productSchema);
    let data = await Product.find()
    //   let data = await Product.find({ name: "M 31" });  // find specific data 
    console.log(data);
};

findInDB()
