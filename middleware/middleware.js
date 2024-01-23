module.exports = reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send('<h1>Please provide your age</h1>')
    }
    else if(req.query.age < 18){
        res.send('<h1>You can not access this page because of your age.(not valid)</h1>')
    }
    else {
        next()
    }
}