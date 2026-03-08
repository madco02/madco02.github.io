/* COUNTDOWN */

const weddingDate = new Date("2026-06-07T16:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("timer").innerHTML =
days+" zile "+hours+" ore "+minutes+" minute";

},1000);


/* SCROLL ANIMATION */

const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

elements.forEach(el => observer.observe(el));
