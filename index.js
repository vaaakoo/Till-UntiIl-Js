
const day1 = document.getElementById('days');
const hour1 = document.getElementById('hours');
const minute1 = document.getElementById('mins');
const second1 = document.getElementById('seconds');
const currentYear1 = document.getElementById('currentTime');

const newyearbtn = document.getElementById('new-year');
const easterbtn = document.getElementById('easter');
const yourbirthbtn = document.getElementById('your-birth');
const paragraph = document.getElementById('longText');
const content = document.getElementById('content');

let text;
let birth;

newyearbtn.addEventListener('click', () =>{
    paragraph.innerText = 'New Year Will Come';
    document.body.style.backgroundImage = "url('./img/snow.jpg')";
    
})


easterbtn.addEventListener('click', () =>{
    paragraph.innerHTML = 'Easter Will Come';
    document.body.style.backgroundImage = "url('./img/red-eggs.jpg')";
    
})

yourbirthbtn.addEventListener('click', () =>{
    birth = prompt("Please enter your birthday:", "1 Jan 2023");
  if (birth == null || birth == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Your birth will soon!!!";
  }
  paragraph.innerHTML = text;
  document.body.style.backgroundImage = "url('./img/birthday.jpg')";

})



// const newYears = '1 Jan 2023';
const easter = '9 Apr 2023';


function newyear() {

    if(paragraph.innerText == 'New Year Will Come'){
        var newDay = '1 Jan 2023';  
    }else if(paragraph.innerText == 'Easter Will Come'){
        var newDay = '16 Apr 2023';
    }else if(paragraph.innerText === text){
        var newDay = birth;
    }else{
        var newDay = '1 Jan 2024';
    }
    const newYearsDate = new Date(newDay);
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

function countdown1() {

    const easterDate = new Date(easter);
    const currentDate1 = new Date();
    
    const year1 = new Date();


    const totalSeconds = (easterDate-currentDate1) / 1000; 

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

newyear();
setInterval(newyear, 1000);