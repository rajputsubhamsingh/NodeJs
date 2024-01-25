const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const port = 3000;

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbName = "e-comm";

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submitForm", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("products");

    const result = await collection.insertOne({
      name: req.body.Namebox,
      rollNo: req.body.Rollbox,
      section: req.body.Secbox,
      gender: req.body.Genbox,
    });

    console.log("Data inserted successfully:", result);
    res.send("Form submitted successfully!");
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
