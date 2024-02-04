const express = require('express');
const cors = require('cors')
require('./db/config');
const User = require('./db/user');
const app = express();


app.use(express.json())
app.use(cors())

app.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result)
})

app.post('/login', async (req, res) => {
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password"); 
        if(user){
            res.send(user)
        }
        else {
            res.send({result: 'No User Found'})
        }
    }
    else {
        res.send({result: 'No User Found'})
    }
})

app.listen(5000, () => {
    console.log(`port is running on 5000`);
})