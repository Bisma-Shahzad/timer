var min =  prompt("Enter minutes");
var sec =  prompt("Enter minutes");
var msec =  prompt("Enter minutes");


var dispmin = document.getElementById('displayminute')
var dispsec = document.getElementById('dispalysecond')
var dispmsec = document.getElementById('displaymsecond')
dispmin.innerHTML = min
dispsec.innerHTML = sec
dispmsec.innerHTML = msec
var startb = document.getElementById('start-btn')
var pauseb = document.getElementById('pause-btn')
var resetb = document.getElementById('reset-btn')
pauseb.disabled = true
resetb.disabled = true

var interval;

function timer(){
    msec--
    dispmsec.innerHTML = msec
    if(msec == 0){
        sec--
        dispsec.innerHTML = sec
        msec = 9

        if(sec == 0){
            min--
            dispmin.innerHTML = min
            sec = 59
        }
    }
}

function startbtn(){
    startb.disabled = true
    pauseb.disabled = false
    resetb.disabled = false
    
    interval = setInterval(function() {
        timer()
    }, 100);
    
}

function pausebtn(){
    startb.disabled = false
    pauseb.disabled = true
    resetb.disabled = false
    clearInterval(interval)
}

function resetbtn(){
    pausebtn()
    startb.disabled = false
    pauseb.disabled = true
    resetb.disabled = true
    
    dispmin.innerHTML = 00
    dispsec.innerHTML = 00
    dispmsec.innerHTML = 00

    valuefunc()

}

function valuefunc(){
     min =  prompt("Enter minutes");
sec =  prompt("Enter minutes");
msec =  prompt("Enter minutes");
dispmin.innerHTML = min
dispsec.innerHTML = sec
dispmsec.innerHTML = msec

}


