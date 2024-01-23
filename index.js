// const colors = require('colors');
// // console.log("Hello".red)

// console.log("Hello Shubham Smile".yellow.bgCyan);   




/*  video no : 11

const http = require('http');
const data = require('./data');
http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4200);

*/



 
// video no : 12
// console.log(process.argv)

// const fs = require('fs');

// const input = process.argv;
// fs.writeFileSync('hello.text', 'this first file');
// fs.writeFileSync(input[2], input[3]);

// if(input[2] == 'add'){
//     fs.writeFileSync(input[3], input[4]);
// }
// else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log('invalid input')
// }

 


// video no : 13
/* const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
console.warn(dirPath);
for(i=0;i<5;i++){
    // fs.writeFileSync(dirPath + '/hello' + i + '.txt', 'a simple text file.');
    fs.writeFileSync(`${dirPath}/hello${i}.txt`, 'a simple text file.');
    // fs.unlinkSync(fs);
}

fs.readdir(dirPath, (error, files) => {
    // console.warn(files);
    files.forEach((item) => {
        console.log('file name is : ', item);
    })
});  */




// video no : 14
// const { log } = require('console');
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, "crud");
// const filePath = `${dirPath}/apple.txt`;


// // crud folder ke ander apple.txt name se ek file create ho jayega.
// fs.writeFileSync(filePath, 'This is a simple demo text file, it is just a trial.')



// fs.readFile(filePath, (error, item) => {
//     console.log(item);       // buffer return karta hai.
// })

// // output - ye hai jo ki readable nhi hai readanble bana ke liye parameter 'utf8' pass karna 
// // jo charcter wise read karta hai.
// <Buffer 54 68 69 73 20 69 73 20 61 20 73 69 6d 70 6c 65 20 64 65 6d 6f 20 74 65 78 74 20 66 69 6c 65 2c 20 69 74 20 69 73 20 6a 
// 75 73 74 20 61 20 74 72 69 61 ... 2 more bytes>


// fs.readFile(filePath, 'utf8', (error, item) => {
//     console.log(item);       // file value return karta hai.
// })


// file ko update karne ka method
// fs.appendFile(filePath, 'and this file is now update.' ,(err)=>{
//     if(!err) console.log('file date is updated successfully.....');
// })


// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if(!err) console.log('file name is updated successfully.....');
// })


// file delete karne ke liye method
// fs.unlinkSync(`${dirPath}/fruit.txt`)



// ------------ video - 15 ----------- 
// Asynchronous basic 
// console.log('start execution.....');

// setTimeout(() => {
//     console.log('logic execution.....');
// }, 2000)

// console.log('complete execution......');



// ------------ video - 16 ------------- 
// Handle asynchronous data in node js 
/* 
let a = 10
let b = 0

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    }, 2000);                                                                                                                                                                                                                                                                                                                                                                                                  
})

waitingData.then((data) => {
    b = data;
    console.log(a+b);
}).catch((err) => {
    console.log(err);
})

*/



// ------------ video - 17 ------------- 
/*
console.log('starting up');

setTimeout(() => {
    console.log('2 second log');
}, 2000);

setTimeout(() => {
    console.log('0 second log');
}, 0);

console.log('finishing up');

*/

 
