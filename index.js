document.querySelectorAll("button")[0].addEventListener("click",f1);
document.querySelectorAll("button")[1].addEventListener("click",f2);
document.querySelectorAll("button")[2].addEventListener("click",f3);
document.querySelectorAll("button")[3].addEventListener("click",f4);
document.querySelectorAll("button")[4].addEventListener("click",f5);
document.querySelectorAll("button")[5].addEventListener("click",f6);
document.querySelectorAll("button")[6].addEventListener("click",f7);
document.querySelectorAll("button")[7].addEventListener("click",f8);
function f1(){
var mus=new Audio("./Messi-WC1.mp3");
mus.play();
var ab=document.querySelectorAll("button")[0];
ab.classList.add("pressed");
setTimeout(function(){ 
    ab.classList.remove("pressed");
},36000)
}
function f2(){
var mus=new Audio("./Messi-WC2.mp3");
mus.play();
var ab1=document.querySelectorAll("button")[1];
ab1.classList.add("pressed");
setTimeout(function(){ 
    ab1.classList.remove("pressed");
},22000)
}

function f3(){
var mus=new Audio("./WC-2022.mp3");
mus.play();
var ab=document.querySelectorAll("button")[2];
ab.classList.add("pressed");
setTimeout(function(){ 
    ab.classList.remove("pressed");
},57000)
}

function f4(){
var mus=new Audio("./mbappe-wc.mp3");
mus.play();
var ab=document.querySelectorAll("button")[3];
ab.classList.add("pressed");
setTimeout(function(){ 
    ab.classList.remove("pressed");
},20000)
}

function f5(){
var mus=new Audio("./magic-man.mp3");
mus.play();
var ab=document.querySelectorAll("button")[4];
ab.classList.add("pressed");
setTimeout(function(){ 
    ab.classList.remove("pressed");
},29000)
}

function f6(){
var mus=new Audio("./wc-2014.mp3");
mus.play();
var ab=document.querySelectorAll("button")[5];
ab.classList.add("pressed");
setTimeout(function(){ 
    ab.classList.remove("pressed");
},53000)
}

function f7(){
var mus=new Audio("./Lamine-Yamal.mp3");
mus.play();
var ab=document.querySelectorAll("button")[6];
ab.classList.add("pressed");
setTimeout(function(){ 
    ab.classList.remove("pressed");
},19000)
}

function f8(){
var mus=new Audio("./Pendu-manutd.mp3");
mus.play();
var ab=document.querySelectorAll("button")[7];
ab.classList.add("pressed");
setTimeout(function(){ 
    ab.classList.remove("pressed");
},44000)
}
