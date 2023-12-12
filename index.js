function statusToggler(){

    const formatSwitchBtn = document.querySelector(".format-switch-btn");
    
    if(!formatSwitchBtn.classList.contains("active")){
        formatSwitchBtn.classList.add("active");
    }else{
        formatSwitchBtn.classList.remove("active");
    }
}

function displayTime(){

    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var AM_PM = document.getElementById("AM_PM");
    const formatSwitchBtn = document.querySelector(".format-switch-btn");
    
    document.getElementById("AM_PM").innerHTML="";
    document.getElementById("switchButton").innerHTML="Standard Time";
    if(!formatSwitchBtn.classList.contains("active")){
        if(hours>=12) document.getElementById("AM_PM").innerHTML="PM";
        if(hours>12) hours = hours - 12;
        document.getElementById("switchButton").innerHTML="Military Time";
    }
    if(hours<10) hours = "0" + hours;
    if(minutes<10) minutes = "0" + minutes;
    if(seconds<10) seconds = "0" + seconds;
    
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
}
setInterval(displayTime, 10);


function displayDate(){
    var weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dateDay = new Date();
    var weekDay = weekDays[dateDay.getDay()];

    document.getElementById("weekDay").innerHTML= weekDay;
    document.getElementById("day").innerHTML=dateDay.getDate();
    document.getElementById("month").innerHTML=dateDay.getMonth()+1;
    document.getElementById("year").innerHTML=dateDay.getFullYear();
}
setInterval(displayDate,10);
