// // ------------ video - 19 ------------- 

// const express = require('express')
// const app = express();

// app.get('', (req, res) => {
//     // req ko browser tab bheja rha hai.
//     // http://localhost:4200/?name=shubhamsingh
//     console.log('data send by browser =>>> ', req.query);
//     console.log('data send by browser =>>> ', req.query.name);
//     res.send('Welcome, this is Home page. <br><br> Mr.' + req.query.name)
// });

// app.get('/about', (req, res) => {
//     res.send('Welcome, this is About us page.')
// });

// app.get('/help', (req, res) => {
//     res.send('Welcome, this is Help page.')
// });

// app.listen(4200);




// // ------------ video - 20 ------------- 

// const express = require('express')
// const app = express();

// app.get('', (req, res) => {  
//     res.send(`
//         <h1>Welcome, to home page</h1>
//         <a href='/about'>About Page </a><br><br>
//         <a href='/help'>Help Page </a>
//     `)
// });

// app.get('/about', (req, res) => {
//     // http://localhost:4200/about?name=shubhamsingh
//     res.send(`
//         <input type='text' placeholder='User Name'  value="${req.query.name}" /><br>
//         <a href='/'>Home Page </a><br>
//         <button> Click Me </button>
//     `)
// });
 
// // creating json data
// app.get('/help', (req, res) => {
//     res.send([
//         {
//             name: 'shubham',
//             email: 'example@gmail.com',
//             age: 20        
//         },
//         {
//             name: 'shubham',
//             email: 'example@gmail.com',
//             age: 20        
//         },
//         {
//             name: 'shubham',
//             email: 'example@gmail.com',
//             age: 20        
//         },
//         {
//             name: 'shubham',
//             email: 'example@gmail.com',
//             age: 20        
//         },
//         {
//             name: 'shubham',
//             email: 'example@gmail.com',
//             age: 20        
//         }
//     ])
// });

// app.listen(4200);


// ------------ video - 21 ------------- 
/*
const express = require('express')
const path = require('path')

const app = express();

const publicPath = path.join(__dirname, 'public')
// console.log(publicPath);

app.use(express.static(publicPath))



app.listen(4200);

*/



// ------------ video - 22 ------------- 
// here we remove file extension because of security purpose.

// removing extension
/*
const express =require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname, 'public')

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

// http://localhost:4200/home.html
// phle is url pe home page chalta tha par ab is par chalega
// http://localhost:4200/home 
app.get('/home', (req, res) => {
    res.sendFile(`${publicPath}/home.html`)
})

app.listen(4200)
*/

// // changing the file name
// const express =require('express')
// const path = require('path')

// const app = express();
// const publicPath = path.join(__dirname, 'public')

// app.get('', (req, res) => {
//     res.sendFile(`${publicPath}/index.html`)
// })

// // dekho yaha niche hm about ke jaagah jo likhenge isi se hmra page waha pe call hoga   
// // aur hm ise change kar ke jo chahe o likh sakte hai 
// // app.get('/about', (req, res) => {
// //     res.sendFile(`${publicPath}/about.html`)
// // })


// // about -> aboutuspage
// app.get('/aboutuspage', (req, res) => {
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('*', (req, res) => {
//     res.sendFile(`${publicPath}/pagenotfound.html`)
// })
// app.listen(4200)


// ------------ video - 23 and 24 ------------- 

const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname, 'public')


// fixed property 
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (req, res) => {
    const user = {
        name: 'shubham',
        email: 'example@gmail.com',
        age: 20,
        city: 'bihar',
        skills: ['html', 'css' ,'js', 'react', 'node', 'mongodb']       
    }
    res.render(`profile`, {user})
})

app.get('/login', (req, res) => {
    res.render(`login`)
})

app.listen(4200)



