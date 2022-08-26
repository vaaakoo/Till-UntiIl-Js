
const day1 = document.getElementById('days');
const hour1 = document.getElementById('hours');
const minute1 = document.getElementById('mins');
const second1 = document.getElementById('seconds');
const currentYear1 = document.getElementById('currentTime');


const newYears = '1 Jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const year1 = new Date();


    const totalSeconds = (newYearsDate-currentDate) / 1000; 

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24 ;
    const minutes = Math.floor(totalSeconds / 60) % 60 ;
    const seconds = Math.floor(totalSeconds) % 60 ;


    currentYear1.innerHTML = year1.toLocaleDateString();
    day1.innerHTML = days;
    hour1.innerHTML = timeFormat(hours);
    minute1.innerHTML = timeFormat(minutes);
    second1.innerHTML = timeFormat(seconds);


}

function timeFormat(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);

