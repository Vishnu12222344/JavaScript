const incrbtn= document.getElementById("incrbtn");
const resetbtn= document.getElementById("resetbtn");
const decrbtn= document.getElementById("decrbtn");
const myh1 = document.getElementById("myh1");

let count=0;

incrbtn.onclick=function(){
    count++;
    myh1.textContent=count;
}
decrbtn.onclick=function(){
    count--;
    myh1.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    myh1.textContent=count;
}