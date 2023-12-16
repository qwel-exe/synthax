var faq = document.getElementsByClassName("faq-page");

var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class, to highlight the button that controls the panel */


    /* Toggle between hiding and showing the active panel */

    var body = this.nextElementSibling;

    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}

/* --------------------------
 * GLOBAL VARS
 * -------------------------- */
// The date you want to count down to
var targetDate = new Date("2024/1/27");   

// Other date related variables
var days;
var hrs;
var min;
var sec;

/* --------------------------
 * ON DOCUMENT LOAD
 * -------------------------- */
window.onload = function() {
   // Calculate time until launch date
   timeToLaunch();
  // Transition the current countdown from 0 
  numberTransition('#days .number', days, 1000, 'easeOutQuad');
  numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
  numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
  numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
  // Begin Countdown
  setTimeout(countDownTimer,1001);
};

/* --------------------------
 * FIGURE OUT THE AMOUNT OF 
   TIME LEFT BEFORE LAUNCH
 * -------------------------- */
function timeToLaunch(){
    // Get the current date
    var currentDate = new Date();

    // Find the difference between dates
    var diff = (currentDate - targetDate)/1000;
    var diff = Math.abs(Math.floor(diff));  

    // Check number of days until target
    days = Math.floor(diff/(24*60*60));
    sec = diff - days * 24*60*60;

    // Check number of hours until target
    hrs = Math.floor(sec/(60*60));
    sec = sec - hrs * 60*60;

    // Check number of minutes until target
    min = Math.floor(sec/(60));
    sec = sec - min * 60;
}

/* --------------------------
 * DISPLAY THE CURRENT 
   COUNT TO LAUNCH
 * -------------------------- */
function countDownTimer(){ 
    
    // Figure out the time to launch
    timeToLaunch();
    
    // Write to countdown component
    document.getElementById("days").getElementsByClassName("number")[0].innerText = days;
    document.getElementById("hours").getElementsByClassName("number")[0].innerText = hrs;
    document.getElementById("minutes").getElementsByClassName("number")[0].innerText = min;
    document.getElementById("seconds").getElementsByClassName("number")[0].innerText = sec;
    
    // Repeat the check every second
    setTimeout(countDownTimer,1000);
}

/* --------------------------
 * TRANSITION NUMBERS FROM 0
   TO CURRENT TIME UNTIL LAUNCH
 * -------------------------- */
function numberTransition(id, endPoint, transitionDuration, transitionEase){
  // Transition numbers from 0 to the final number
  var element = document.querySelector(id);
  var startValue = parseInt(element.textContent, 10);
  
  var startTime;
  function updateNumber(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var percentage = Math.min(progress / transitionDuration, 1);
    var currentValue = Math.floor(startValue + (endPoint - startValue) * percentage);
    element.textContent = currentValue;

    if (percentage < 1) {
      requestAnimationFrame(updateNumber);
    }
  }

  requestAnimationFrame(updateNumber);
}
