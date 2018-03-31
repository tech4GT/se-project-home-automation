const five = require('johnny-five')
const ras = require('raspi-io');
var board = new five.Board({
    io : new ras()
});
board.on('ready',function(){
    led = new five.Led('P1-13');
    led.on();
});

module.exports = {
    fetchAllStatus: function () { 
        return new Promise((resolve,reject)=>{
            led.off()
            resolve([false,false])
        })
    },
    fetchStatusbyId: function (id) {
        return new Promise((resolve,reject)=>{
            resolve(false)
        })
    },
    setStatusbyId: function (id,status) { 
        return new Promise((resolve,reject)=>{
            resolve(status)
        })
    }
}