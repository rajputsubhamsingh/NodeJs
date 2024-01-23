// ---------------- video - 25 ----------------
// basic middleware

// ise hm application level middleware kehte hai.
const express = require('express')
const app = express()

// middleware 
// http://localhost:4200/?age=18  
const reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send('<h1>Please provide your age</h1>')
    }
    else if(req.query.age < 18){
        res.send('<h1>You can not access this page because of your age.(not valid)</h1>')
    }
    else {
        // res.send(`<h1>Your age ${req.query.age}</h1>`)
        next()
    }
}

app.use(reqFilter)
app.get('/', (req, res)=>{
    res.send('Welcome to home page.') 
})

app.get('/users', (req, res)=>{
    res.send('Welcome to users details page.')
})


app.listen(4200);