let countdowndate=new Date("Feb 17,2024 00:00:00").getTime();
let x=setInterval(function(){
    let now=new Date().getTime();
    let distence=countdowndate - now;

let days = Math.floor(distence / (1000 * 60 * 60 * 24));
let hours = Math.floor((distence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distence % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distence % (1000 * 60)) / 1000);
   document.querySelector("#days").innerHTML=days;
   document.querySelector("#hours").innerHTML=hours;
   document.querySelector("#minutes").innerHTML=minutes;
   document.querySelector("#seconds").innerHTML=seconds;
})