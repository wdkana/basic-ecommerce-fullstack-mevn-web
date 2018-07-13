const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('http://localhost:8081/users');

const app =  express()
app.use(morgan('combine'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function(req, res){
    res.json({
        "username": "dea",
        "password": "123",
        "email": "afrizaldea@gmail.com"
    })
    console.log('GETTING DATA OF HOMEPAGE...')
})

app.post('/register', function(req, res){
    var user = new User(req.body)
       user.save()
     .then(user => {
     res.status(200).json({'user': 'ticket added successfully'})
     })
     .catch(err => {
     res.status(400).send("unable to save to database")
     })
})

app.listen(process.env.PORT || 8081, function(){
    console.log('starting server 8081...')
    
})



var quotes = new Quotes(req.body)
var saves = quotes.save()
if(saves){
    console.log('sukses')
}else{
    console.log('ggal')
}