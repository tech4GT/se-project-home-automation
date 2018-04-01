const express = require('express')
const bp = require('body-parser')
const app = express()
const iot = require('./iotUtils')
const cors = require('cors')

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))
app.use(cors())

app.get('/all', function (req, res) {
    iot.fetchAllStatus().then((arr)=>{
        res.send([
            {
                'id': 1,
                'name': 'light',
                'status': arr[0]
            },
            {
                'id': 2,
                'name': 'fan',
                'status': arr[1]
            }
        ])
    })
})
app.get('/1', function (req, res) {
    iot.fetchStatusbyId(1).then(bool=>res.send({
        'id': 1,
        'name': 'light',
        'status': bool
    }))
})
app.post('/1', function (req, res) {
    iot.setStatusbyId(1,JSON.parse(req.body.status)).then((bool)=>{
        console.log(req.body)
        if(JSON.parse(req.body.echo)) res.send({
            'success': true,
            'status': bool
        })
        else res.send({
            'success': true
        })
    })
})
app.get('/2', function (req, res) {
    iot.fetchStatusbyId(2).then(bool=>res.send({
        'id': 2,
        'name': 'fan',
        'status': bool
    }))
})
app.post('/2', function (req, res) {
    iot.setStatusbyId(2,JSON.parse(req.body.status)).then((bool)=>{
        console.log(req.body)
        if(JSON.parse(req.body.echo)) res.send({
            'success': true,
            'status': bool
        })
        else res.send({
            'success': true
        })
    })
})


app.listen(5000, function () {
    console.log("started on port 5000")
})
