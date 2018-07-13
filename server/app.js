const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
var request = require('request');

mongoose.connect('mongodb://localhost:27017/quotes')
mongoose.Promise = global.Promise

const app =  express()

app.use('/api', require('./routes/api'))
app.use(morgan('combine'))
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
  }))
app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/', function(req, res){
    console.log('ok getting / ')
        res.send([{
            "msg": "sukses"
        }]);
  })

app.get('/posts', function(req, res){
    console.log('ok getting /posts ')
    request('http://www.recipepuppy.com/api', function(error, response, posts){
        res.send(posts)
    });
  })

app.listen(process.env.PORT || 8081, function(){
    console.log('starting server 8081...')
})
