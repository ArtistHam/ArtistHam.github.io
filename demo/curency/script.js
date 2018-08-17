function ready() {
    getRate();
}

function getRate() {

}

var date = new Date();

var year = '' + date.getFullYear();
var month = date.getMonth() + 1 + "";
var day = '' + date.getDate();

if(day.length == 1){
    day = "0" + day;
}

if(month.length == 1){
    month = "0" + month;
}

var todayDay = day + "." + month + "." + year;

alert(todayDay);

document.addEventListener("DOMContentLoaded", ready);