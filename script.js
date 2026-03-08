function openInvite(){

document.getElementById("intro").style.display="none";

document.getElementById("music").play();

}


/* COUNTDOWN */

const weddingDate = new Date("2026-06-07T16:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate-now;

const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("timer").innerHTML=
days+" zile "+hours+" ore "+minutes+" minute";

},1000);


/* SCROLL ANIMATION */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

document.querySelectorAll(".fade").forEach(el=>observer.observe(el));


/* SLIDESHOW */

let slideIndex=0;

function showSlides(){

let slides=document.getElementsByClassName("slide");

for(let i=0;i<slides.length;i++){

slides[i].style.display="none";

}

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,4000);

}

showSlides();
