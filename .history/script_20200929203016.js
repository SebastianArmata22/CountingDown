let daysElem= document.getElementById('day');
let hoursElem= document.getElementById('hour');
let minElem= document.getElementById('minute');
let secElem= document.getElementById('second');

const newYears= '1 Jan 2021';
function counDown(){
const current = new Date();
const newyears= new Date(newYears);
const day= Math.floor((newyears- current)/1000/3600/24);
const hour= Math.floor((newyears- current)/1000/3600);
const day= Math.floor((newyears- current)/1000/3600/24);
const day= Math.floor((newyears- current)/1000/3600/24);

console.log(hour);
daysElem.innerHTML=day;

}
counDown();