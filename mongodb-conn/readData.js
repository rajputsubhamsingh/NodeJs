// const { MongoClient } = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);
// const dbName = 'e-comm';

// async function dbConnect() { 
//     await client.connect(); 
//     const db = client.db(dbName);
//     return db.collection('products'); 
// }

// upar wale code hm import kar ke dusre file se lake use kar skte hai 
// matlab ki connection ke liye ek alag special file bana ke use karenge joki ek achha ahibit hai.









const dbConnect = require('./mongodbConn')

// dbConnect()
// .then((response) => {
//     return response.find({}).toArray()
// })
// .then((data) => {
//     console.log(data);
// }) 


// fetch all the data
// const main = async () => {
//     let data = await dbConnect()
//     data = await data.find().toArray()
//     console.log(data);
// }

// main()


// fetch specific data 
const main = async () => {
    let data = await dbConnect()
    data = await data.find({name:'s-4 ultra'}).toArray()
    console.log(data);
}

main()