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
var os = require('os');
var ifaces = os.networkInterfaces();
var ip = "Hey there"

var Lcd = require('lcd');
  lcd = new Lcd({
    rs: 12,
    e: 21,
    data: [5, 6, 17, 18],
    cols: 8,
    rows: 2
  });

lcd.on('ready', function() {
  lcd.setCursor(16, 0);
  lcd.autoscroll();
  Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
      // this interface has only one ipv4 adress
      ip =  iface.address + ":8080"
        print("Please visit " + ip + " Thankyou.!  ")
console.log(ip)
    ++alias;
  });
});
});

function print(str, pos) {
  pos = pos || 0;

  if (pos === str.length) {
    pos = 0;
  }

  lcd.print(str[pos]);

  setTimeout(function() {
    print(str, pos + 1);
  }, 300);
}

// If ctrl+c is hit, free resources and exit.
process.on('SIGINT', function() {
  lcd.clear();
  lcd.close();
  process.exit();
});
