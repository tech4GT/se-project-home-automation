const five = require('johnny-five')

module.exports = {
    fetchAllStatus: function () { 
        return new Promise((resolve,reject)=>{
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