const five = require('johnny-five')
const ras = require('raspi-io');
var board = new five.Board({
    io : new ras()
});
board.on('ready',function(){
    led = new five.Led('P1-13');
    // make fan
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
                
            }    
        }
        else{
            if(id == 1){
                led.off()
                statuses[0] = false
            }
            else{
                
            }
            
        }
        return new Promise((resolve,reject)=>{
            resolve(status)
        })
    }
}