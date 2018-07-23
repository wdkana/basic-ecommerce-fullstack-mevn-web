const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Pastry = require('../models/pastry')
const cors = require('cors')

router.use(bodyParser.urlencoded({
    extended: false
  }))
router.use(bodyParser.json())
router.use(cors())

// instansiasi api utama2
router.get('/', function(req, res){
    res.send('OK')
})

// ambil detail data kue berdasarkan kode kue
router.get('/pastry/kue/:kode', function(req, res){
    res.status(200).json({'pastry / kode': req.params})
})

// transaksi pembelian kue
router.get('/pastry/kue/:kodeKue/:jumlahBeli/:idPembeli/:notlpPembeli/:dari-:ke', function(req, res){
res.status(200).json(
    {"kode kue": req.params.kodeKue, "jumlah beli": req.params.jumlahBeli, "id pembeli": req.params.idPembeli, "no tlp pembeli:": req.params.notlpPembeli, "dikirim dari": req.params.dari, "dikirim ke": req.params.ke}
    )
})

// ambil semua data kue
router.get('/pastry', function(req, res){
    Pastry.find({}, (err, pastry) => {
        var pastryMap = {}
        pastry.forEach(function(pastries) {
        pastryMap[pastries._id] = pastries
        })
        res.send(pastryMap)
      })
})

// insert data kue
router.post('/pastry', function(req, res){
    console.log(req.body)
    var pastry = new Pastry(req.body)
    pastry.save()
    .then(pastry => {
        res.status(200).json({'pastry': 'pastry added successfully'})
    })
})

module.exports = router