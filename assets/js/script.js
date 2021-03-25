//Dom variables
var currentDayEl = $("#currentDay");


//js variables


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    currentDayEl.text(rightNow);
  }

//callback functions
setInterval(displayTime, 1000);

