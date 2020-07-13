//setInterval means --->repeatedly running -->br br repeat 
//setTimeout means ---> after some time running

//setInterval aik predefine fuction ha is ma hum fuction define kra ga 
//ya do argument leta ha phela wo  function jo br br chalaga
//or dosra argument ma laga wo time ka kitna time baat wo chalaga 
//time yahan wo mili second ma lagaa

// First way to write

// setInterval(function timer (){

// },1000)
//1000milisecond=1seconds

//Second way to write 
// function timer(){
// console.log("running.....")
// }
// setInterval(timer,1000)


// function timeout(){
//     console.log("running.....")
// }

// setTimeout(timeout,3000)
// //3000miliseconds=3secs


// var count=0 
// function timer(){
//     count++
//     console.log(count)
//     }
//     setInterval(timer,1000)

//ab ma isko rokoga kaise
// var count=0 
// var interval
// function timer(){
//     count++
//     console.log(count)
//     }
// interval= setInterval(timer,1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)

//STOP WATCH
var hour=0;
var min=0
var sec=0
var milseconds=0

var hourheading=document.getElementById("hour")
var minheading=document.getElementById("min")
var secheading=document.getElementById("sec")
var milsecondsheading=document.getElementById("milseconds")
var interval

function timer(){
    milseconds++
    milsecondsheading.innerHTML=milseconds
    if(milseconds >= 100){
        sec++
        secheading.innerHTML=sec
        milseconds=0
    } else if(sec >= 60){
        min++
        minheading.innerHTML=min
        sec=0
    }
    else if(min >= 60){
        min=0
        hourheading.innerHTML=hour
        hour++
    }
    else if (hour = 24){
        hour=0
    }
}
//10*100=1000
//10=1000 milisecons or hundreds miliseconds

function start(){
    interval=setInterval(timer,10)
    document.getElementById('start').disabled=true
    document.getElementById('stop').disabled=false
    document.getElementById('reset').disabled=false


}
function stop(){
    clearInterval(interval)
    document.getElementById('start').disabled=false
    document.getElementById('stop').disabled=true
    document.getElementById('reset').disabled=false
}

function reset(){
    document.getElementById('start').disabled=false
    document.getElementById('stop').disabled=false
    document.getElementById('reset').disable=true
    hour=0
    min=0
    sec=0
    milseconds=0
    hourheading.innerHTML=hour
    minheading.innerHTML=min
    secheading.innerHTML=sec
    milsecondsheading.innerHTML=milseconds
    clearInterval(interval)
}