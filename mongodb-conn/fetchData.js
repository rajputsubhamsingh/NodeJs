// const { MongoClient } = require('mongodb');
 
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// const dbName = 'e-comm';

// async function getData() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');

//     const db = client.db(dbName);
//     const collection = db.collection('products'); 

//     const response = await collection.find({}).toArray();
//     console.log(response);
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     // Close the MongoDB connection after the operation is complete
//     await client.close();
//     console.log('Disconnected from MongoDB');
//   }
// }

// getData();


const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1/27017')
async function fetchData(){
    try{
        await client.connect()
        console.log('connected')

        // const db = client.db('e-comm');
        // const collection = db.collection('products');
        // const response = await collection.find({}).toArray();
        // console.log(response);

        // shortcut 
        const result = await client.db('e-comm').collection('products').find({}).toArray();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

fetchData();