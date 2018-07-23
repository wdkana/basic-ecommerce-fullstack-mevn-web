const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Motor = require('../models/motor')
const cors = require('cors')

router.use(bodyParser.urlencoded({
    extended: false
  }))
router.use(bodyParser.json())
router.use(cors())

// instansiasi api utama2
router.get('/', (req, res) => {
    res.send('OK')
})

// detail data motor berdasarkan kode motor
router.get('/moge/harga/:harga', (req, res) => {
    res.status(200).json({'list moge': req.params})
})

// transaksi pembelian motor
router.get('/plat/:plat/:idPembeli/:dari-:ke', (req, res) => {
res.status(200).json(
    {"Plat Nomor": req.params.plat, "id pembeli": req.params.idPembeli, "dikirim dari": req.params.dari, "dikirim ke": req.params.ke}
    )
})

// semua data motor
router.get('/semua', (req, res) => {
    Motor.find({}, (err, motor) => {
        var semua = {}
        motor.forEach(function(motors) {
        semua[motors._id] = motors
        })
        res.send(semua)
      })
})

//delete data motor berdasarkan ID motor
router.get('/delete/:_id', (req, res) => {
    Motor.findByIdAndRemove(req.params._id, (err, motor) => { 
        if (err) return res.status(500).send(err)
        const response = {
            message: "Motor successfully deleted",
            plat: motor._id
        };
        res.send(response)
    })
})

// insert data motor
router.post('/tambah_data_motor', (req, res) => {
    console.log(req.body)
    var motor = new Motor(req.body)
    motor.save()
    .then(motor => {
        res.send(req.body)
    })
})

module.exports = router