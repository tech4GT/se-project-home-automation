const express = require('express')
const bp = require('body-parser')
const app = express()

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.get('/all', function (req, res) {
//    TODO: Send all device details
})
app.get('/one', function (req, res) {
//    TODO

})
app.post('/one', function (req, res) {
//    TODO
})
app.get('/two', function (req, res) {
//    TODO

})
app.post('/two', function (req, res) {
//    TODO

})


app.listen(8080, function () {
    console.log("started on port 8080")
})