const loginClockTime = document.querySelector("#login-clock .clock div:first-child");
const loginClockDay = document.querySelector("#login-clock .clock div:nth-child(2)");
const mainClock = document.querySelector("#main-clock");
const mainClockTime = document.querySelector("#main-clock .clock div:first-child");
const mainClockDay = document.querySelector("#main-clock .clock div:nth-child(2)");

function getClock(){
    const day = new Date();
    const h = `${day.getHours()}`.padStart(2,"0");
    const m = `${day.getMinutes()}`.padStart(2,"0");
    const s = `${day.getSeconds()}`.padStart(2,"0");
    
    const Y = `${day.getFullYear()}`;
    const M = `${day.getMonth() + 1}`.padStart(2,"0");
    const D = `${day.getDate()}`.padStart(2,"0");
    loginClockTime.innerText = `${h}:${m}:${s}`
    loginClockDay.innerText = `${M}/${D}`;
    if(h>12){
        mainClockTime.innerText = `오후 ${h-12}:${m}`;
    }
    else{
        mainClockTime.innerText = `오전 ${h}:${m}`;
    }
    mainClockDay.innerText = `${Y} - ${M} - ${D}`;
    mainClock.title = `${Y}년 ${M}월 ${D}일`
}


getClock();
setInterval(getClock,1000);