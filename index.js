let username;
//username=window.prompt("Enter your Name");


//console.log(username);

document.getElementById("button").onclick=function(){
    username=document.getElementById("input").value;
    document.getElementById("myh1").textContent=`Hello ${username}`
}
