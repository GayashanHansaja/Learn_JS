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
