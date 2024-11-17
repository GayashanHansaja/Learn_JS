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

//if statements

let age=document.getElementById("age");
let button2=document.getElementById("agebutton");
let result=document.getElementById("result");
let age1;

button2.onclick=function(){
    age1=age.value;
    age1=Number(age1);

    if(age1>=50){
        result.textContent=`you are old`;
    }
    else if(age1 == 0){
        result.textContent=`you just born`;
    }
    else if(age1>=18){
        result.textContent=`you are able`;

    }
    else{
        result.textcontent=`you must be 18+`;
    }


}

//checked property

let checkbox=document.getElementById("check");
let visa=document.getElementById("radio1");
let master=document.getElementById("radio2");
let paypal=document.getElementById("radio3");
let button3=document.getElementById("chckbtn");
let result2=document.getElementById("checkStatus");
let result3=document.getElementById("cardtype");

button3.onclick=function(){
    if(checkbox.checked){
        result2.textContent=`You have subscribed`;
    }
    else{
        result2.textContent="You have not subscribed";
    }

    if(visa.checked){

        result3.textContent="You have selected Visa";
    }
    else if(master.checked){
        result3.textContent="You have selected Master";
    }

    else if(paypal.checked){
        result3.textContent="You have selected Paypal";
    }

    else {
        result3.textContent="You have not selected any card";
    }
}

/* ternary operator */
/* let q=10;

let number=q>=10 ? "greater than 10" : "les than 10";

console.log(number);


let time=10;
let greeting=time>=12 ?"good afternoon":"good morning";
console.log(greeting); */

//Switch statement

/* let marks=90;

switch(true){
    case marks>=90:
        console.log("A+");
        break;

    case marks>=75:
        console.log("A");
        break;
    
    case marks>=55:
        console.log("B");
        break;
    
    case marks>=45:
        console.log("C");
        break; 
    
    case marks>=35:
        console.log("D");
        break;

    case marks<35:
        console.log("Fail");
        break;
    default:
        console.log("Invalid marks");
        break;

} */

//String Methods
/* 
let name="Gayashan";

console.log(name.charAt(0));
console.log(name.indexOf("y"));
console.log(name.length);
console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.repeat(3));
console.log(name.startsWith("n"));//check using if else
console.log(name.endsWith("n"));//check 

let number="080-346-0986975";

console.log(number.replaceAll("-","*"));
console.log(number.padStart(20,"*"));
console.log(number.padEnd(20,"*")); */

//string slicing

/* const full_name="gayashan hansaja";

let firstname=full_name.slice(0,full_name.indexOf(" "));
let lastname=full_name.slice(full_name.indexOf(" ")+1)

console.log(firstname)
console.log(lastname) */

//Method chaining
//no chain
let user=window.prompt("Enter your name");

/* user=user.trim();
let letter=user.charAt(0);
letter=letter.toUpperCase();


let others=user.slice(1);
others=others.toLowerCase();

user=letter+others;

console.log(user); */
//with chain

/* user=user.trim().charAt(0).toUpperCase()+user.slice(1).toLowerCase();
console.log(user); */

//assignment opereator

/* = just assignment
== compare if  value are equal
=== compare if values and types are equal

!= not equal
!== not equal in value and type */

//for loop
// want to skip certain steps  use continue

//spread operator
/* 
let numbers=[1,2,3,4,5,6];
console.log(numbers);//NaN
console.log(...numbers);//1 2 3 4 5 6

let name="gayashan";
console.log(...name);//g a y a s h a n

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods); */

//rest parameter
const food1="apple";
const food2="orange";
const food3="banana";
const food4="carrot";

function food(...food){
    return food;
}

console.log(food(food1,food2,food3,food4));