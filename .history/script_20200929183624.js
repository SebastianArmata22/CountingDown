let daysElem= document.getElementById('day');
let hoursElem= document.getElementById('hour');
let minElem= document.getElementById('minute');
let secElem= document.getElementById('second');

let newYears= new Date(2021,1,1);
function counDown(){
    let now= new Date();
    let days=now.getDay;
    console.log(days);
}