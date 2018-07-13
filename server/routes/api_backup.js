const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Quotes = require('../models/quotes')

router.use(bodyParser.urlencoded({
    extended: true
  }))
router.use(bodyParser.json())

router.get('/user', function(req, res){
    console.log('GET /user DATA = 200')
    res.json({
    type: "GET"
    })
})

router.post('/quotes', function(req, res){
    const quotes = new Quotes(req.body)
    quotes.save(function(err, result){
        if(err){
            console.log('>>>>>> Error')
        }else{
            res.send({
                message: "sukses"
            })
            console.log('>>>>>> ' + JSON.stringify(result, null, 4))
        }
    })
    console.log('POST /quotes DATA = 200');
})


module.exports = router