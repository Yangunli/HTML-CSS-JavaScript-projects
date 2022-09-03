const newYears = "1 Jan 2023";
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

function countdowm(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    // const totalSeconds = (newYearDate -currentDate) /1000

    const days = Math.floor((newYearDate -currentDate) /1000/60/60/24)
    const hours =  Math.floor((newYearDate -currentDate) /1000/60/60%24)
    const minutes = Math.floor((newYearDate -currentDate) /1000/60%60)
    const seconds = Math.floor((newYearDate -currentDate) /1000%60)
  
    daysEl.innerHTML= days;
    hoursEl.innerHTML= hours;
    minutesEl.innerHTML= minutes;
    secondsEl.innerHTML= seconds;
}


countdowm();
setInterval(countdowm,1000)

