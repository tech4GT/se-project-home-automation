const baseUrl = window.location.href.substr(0,window.location.href.length-5) + '5000'
// const baseUrl = "http://192.168.1.6:5000"
let lightUrls = ['https://cdn4.iconfinder.com/data/icons/ui-controls-miscellaneous/32/interface-controls-light-bulb-off-512.png',
"data:image/png;base64,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"],
fanUrls = ["http://toofanfans.com/img/feature_img_3.png"
,"http://www.clker.com/cliparts/e/3/6/e/1217720008497594689cieling%20fan.svg.hi.png"] 




$.get(baseUrl + '/all',function (data) { 
    if(!data[0].status){
        $('#lightImg').attr("src",lightUrls[0])
        $('#lightCard').addClass('red')
        $('#lightCard').removeClass('green')
    }
    else{
        $('#lightImg').attr("src",lightUrls[1])
        $('#lightCard').addClass('green')
        $('#lightCard').removeClass('red')
    }

    if(!data[1].status){
        $('#fanImg').attr("src",fanUrls[0])
        $('#fanCard').addClass('red')
        $('#fanCard').removeClass('green')
    }
    else{
        $('#fanImg').attr("src",fanUrls[1])
        $('#fanCard').addClass('green')
        $('#fanCard').removeClass('red')
    }
 })
$('#lightOn').click(function(){
    $.post(baseUrl + "/1",{status: "true",echo: true},function (data) { 
        console.log(data)
        if(data.status){
            $('#lightImg').attr("src",lightUrls[1])
            $('#lightCard').addClass('green')
            $('#lightCard').removeClass('red')
        }
     })
})
$('#lightOff').click(function(){
    $.post(baseUrl + "/1",{status: "false",echo: true},function (data) { 
        console.log(data)
        if(!data.status){
            $('#lightImg').attr("src",lightUrls[0])
            $('#lightCard').addClass('red')
            $('#lightCard').removeClass('green')
        }
     })
})
$('#fanOn').click(function(){
    $.post(baseUrl + "/2",{status: "true",echo: true},function (data) { 
        console.log(data)
        if(data.status){
            $('#fanImg').attr("src",fanUrls[1])
            $('#fanCard').addClass('green')
            $('#fanCard').removeClass('red')
        }
     })
})
$('#fanOff').click(function(){
    $.post(baseUrl + "/2",{status: "false",echo: true},function (data) { 
        console.log(data)
        if(!data.status){
            $('#fanImg').attr("src",fanUrls[0])
            $('#fanCard').addClass('red')
            $('#fanCard').removeClass('green')
        }
     })
})