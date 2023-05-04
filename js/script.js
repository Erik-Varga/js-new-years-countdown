// DOM Elements
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let new_year = document.getElementById('newYear');

// date format mm/dd/yyyy
let currentYear = (new Date().getFullYear());
let endYear = (new Date().getFullYear() + 1);

let endDate = '01/01/' + endYear + ' 00:00:00';
new_year.innerHTML = (endYear + '<br><span>Happy New Year</span></h2>');

// leap year
let daysInYear = 365;
    if (((currentYear % 4 == 0) && (currentYear % 100 != 0)) || (currentYear % 400 == 0)) {
        daysInYear = 366;
    };
let animateDayDot = 0.986;
    if (daysInYear = 366) { animateDayDot = 0.984};

let x = setInterval(function() {
    let now = new Date(endDate).getTime();

    let countDown = new Date().getTime();
    let distance = now - countDown;

    // time calculation for days, hours, minutes, seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));

    // output results
    days.innerHTML = d + "<br><span>Days</span>";
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";

    // animate stroke
    dd.style.strokeDashoffset = 440 - (440 * d) / daysInYear;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // animate circle
    day_dot.style.transform = `rotateZ(${d * animateDayDot}deg)`; // 360deg / 365 or 366
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`; // 360deg / 24hrs
    min_dot.style.transform = `rotateZ(${m * 6}deg)`; // 360deg / 60m
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`; // 360deg / 60s


})