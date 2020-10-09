//assign our vars to correct html IDs
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// var we will be targetting calculations against
const newYears = '1 Jan 2021';

// create function that finds how long until new years. First finding seconds.
function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

//calculate x left until new years -- asign to var
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

//insert values into html
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

//console.log(days, hours, minutes, seconds);
}

//using interpolation to check times
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
// initial call

countDown();

setInterval(countDown, 1000);

