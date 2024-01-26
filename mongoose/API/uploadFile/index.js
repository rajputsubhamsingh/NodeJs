// file ko hm `Multer` ke help se database me upload kiya jata.
// `Multer` - "Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency."
// NOTE: Multer will not process any form which is not multipart (multipart/form-data).

// installation :-
// npm i multer

const express = require('express')
const multer = require('multer')
const app = express()

// multer middleware ke tarah kam karta hai.
// multer function ke andar ek object jata hai.
// cb- callback 
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post('/upload', upload, (req, res) => {
    res.send('file uploaded')
})

app.listen(4200)