const five = require('johnny-five')
const ras = require('raspi-io');
var board = new five.Board({
    io : new ras()
});
board.on('ready',function(){
    led = new five.Led('GPIO7');
    fan = new five.Led('P1-13');
    led.on();
});
var statuses =  [false, false]

module.exports = {
    fetchAllStatus: function () { 
        return new Promise((resolve,reject)=>{
            resolve(statuses)
        })
    },
    fetchStatusbyId: function (id) {
        return new Promise((resolve,reject)=>{
            resolve(statuses[id-1])
        })
    },
    setStatusbyId: function (id,status) {
        if(status){
            if(id ==1){
                led.on()
                statuses[0] = true
            }
            else{
                fan.on()
                statuses[0] = true
            }    
        }
        else{
            if(id == 1){
                led.off()
                statuses[0] = false
            }
            else{
                fan.off()
                statuses[1] = false
            }
            
        }
        return new Promise((resolve,reject)=>{
            resolve(status)
        })
    }
}
