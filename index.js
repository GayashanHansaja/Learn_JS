let username;
//username=window.prompt("Enter your Name");


//console.log(username);

document.getElementById("button").onclick=function(){
    username=document.getElementById("input").value;
    document.getElementById("myh1").textContent=`Hello ${username}`
}

//Type convertion
/* const PI=3.14;
let radius;
let circumference;

PI=756.78;
radius=Number(radius);

circumference=2*PI*radius;

console.log(circumference);77
 */

// check const

/* const PI=3.14;
let radius;
let circumference;
document.getElementById("button2").onclick=function(){
    radius=document.getElementById("input2").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("myh3").textContent=`Circumference of the circle is ${circumference}`


} */

const countbtn=document.getElementById("count");
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
let count=0;

increase.onclick=function(){
    count++;
    countbtn.textContent=count;
    
}

decrease.onclick=function(){
    count--;
    countbtn.textContent=count;
    
}

reset.onclick=function(){
    count=0;
    countbtn.textContent=count;
    
}

//math=build in object that provides mathematical operations

/* let x=8;
let y=-30;
let z=2;

let min=Math.min(x,y,z);
let max=Math.max(x,y,z);
let power=Math.pow(x,z);
let sqt=Math.sqrt(x);
let flor=Math.floor(y);
let upper=Math.ceil(y);
let round=Math.round(y);
let trunc=Math.trunc(y);
let log=Math.log(y);
let abs=Math.abs(y);

console.log(abs); */

//Randoim number gnertor

let min=1;
let max=6;

let button=document.getElementById("roll");
let label1=document.getElementById("Rnumber1");
let label2=document.getElementById("Rnumber2");
let label3=document.getElementById("Rnumber3");

let random1
let random2
let random3
button.onclick=function(){
    random1=Math.floor(Math.random()*max)+min;
    random2=Math.floor(Math.random()*max)+min;
    random3=Math.floor(Math.random()*max)+min;

    label1.textContent=random1;
    label2.textContent=random2;
    label3.textContent=random3;
}

