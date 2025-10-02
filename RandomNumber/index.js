const mybutton=document.getElementById("mybutton");
const mylabel=document.getElementById("mylabel");
const mylabel1=document.getElementById("mylabel1");
const mylabel2=document.getElementById("mylabel2");

let randomnumber1=0;
let randomnumber2=0;
let randomnumber3=0;

mybutton.onclick=function(){
    randomnumber1=Math.floor(Math.random()*10);
    randomnumber2=Math.floor(Math.random()*10);
    randomnumber3=Math.floor(Math.random()*10);
    mylabel.textContent=randomnumber1;
    mylabel1.textContent=randomnumber2;
    mylabel2.textContent=randomnumber3;
}