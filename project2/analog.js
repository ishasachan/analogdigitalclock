




setInterval(() => {
let hours= document.getElementById("hours");
let minutes= document.getElementById("minutes");
let second= document.getElementById("second");
let ampm= document.getElementById("ampm");

let hh= document.getElementById("hh");
let mm= document.getElementById("mm");
let ss= document.getElementById("ss");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h>=12 ? "PM" : "AM";

hours.innerHTML=h + " <br><span>Hours</span>";
minutes.innerHTML=m +"<br><span>Minutes</span>";
second.innerHTML=s +"<br><span>Second</span>";
ampm.innerHTML= am;

hh.style.strokeDashoffset = 440-(440*h) /12 ;
mm.style.strokeDashoffset = 440-(440*m) /60 ;
ss.style.strokeDashoffset = 440-(440*s) /60;

//convert 24 hr to 12
if(h>12){
    h= h-12;
}
//add zero before sigle digit
h=(h<10)?"0" +h : h;
m=(m<10)?"0" +m : m;
s=(s<10)?"0" +s : s;
})