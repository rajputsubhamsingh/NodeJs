// // ---------------- video - 26 ----------------
// // route middleware - yaha hm jis pe chahenge usi ek special file pe middleware apply karenge.
// // route middleware - aise middleware jo ek single route ke upar bhi kam karenge,
// // rounting ke group ke upar bhi kam karenge

// const express = require('express')
// const app = express()

// // middleware 
// // http://localhost:4200/?age=18  
// // const reqFilter = (req, res, next) => {
// //     if(!req.query.age){
// //         res.send('<h1>Please provide your age</h1>')
// //     }
// //     else if(req.query.age < 18){
// //         res.send('<h1>You can not access this page because of your age.(not valid)</h1>')
// //     }
// //     else {
// //         next()
// //     }
// // }
// // isko hm seprate file bana ke waaha se bhi leke use kar skte hai. 

// const reqFilter = require('./middleware')


// // app.use(reqFilter)
// app.get('/', (req, res)=>{
//     res.send('Welcome to home page.') 
// })
// app.get('/users', reqFilter, (req, res)=>{
//     res.send('Welcome to users details page.')
// })
// app.get('/about', reqFilter, (req, res)=>{
//     res.send('Welcome to About page.')
// })
// app.get('/help', (req, res)=>{
//     res.send('Welcome to Help page here to help you.')
// })


// app.listen(4200);











// agar hm ko bahut sare route pe rout apply karana ho to aise karenge
const express = require('express')
const app = express()
const reqFilter = require('./middleware')
const route = express.Router()

route.use(reqFilter)

app.get('/', (req, res)=>{
    res.send('Welcome to home page.') 
})
app.get('/users', (req, res)=>{
    res.send('Welcome to users details page.')
})
route.get('/about', (req, res)=>{
    res.send('Welcome to About page.')
})
route.get('/help', (req, res)=>{
    res.send('Welcome to Help page here to help you.')
})
route.get('/contact', (req, res)=>{
    res.send('Contact page')
})
route.get('/Info', (req, res)=>{
    res.send('Welcome to Info. Page')
}) 


app.use('/', route)

app.listen(4200);