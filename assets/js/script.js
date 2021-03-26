//Dom variables
var currentDayEl = $("#currentDay");
var calendarContainerEl = $(".calendarContainer");
var timeEl = $(".time");
var nowHour = moment().format("HH:mm a");

//creates the rows for the planner
function createRow() {
    for (i=0; i < 9; i++) {
        var row =$("<div>");
        row.addClass("row time-block");
        rowClass = "row" + [i];
        console.log(rowClass);
        row.addClass(rowClass);
        calendarContainerEl.append(row);
        
        var timeCol = $("<div>");
        timeCol.addClass("col-12 col-md-2 hour");
        timeColId = "row" + [i];
        timeCol.attr('id', timeColId);
        row.append(timeCol);

        var textArea = $("<textarea>");
        textArea.addClass("col-12 col-md-9");
        row.append(textArea);
        
        var save = $("<btn>");
        save.addClass("btn saveBtn col-12 col-md-1")
        saveId = [i];
        save.attr('hour', saveId);
        save.append("<img id='saveImg' class='icon' src='assets/images/save icon2.png'/>");
        row.append(save); 

        var timeSpan = $("<span>");
        timeCol.append(timeSpan);
        var indexHour = parseInt([i]) + parseInt(9);
        console.log(indexHour);
        var block = moment(indexHour, "HH").format("h:mm a");
        console.log(block);
        // var timeText = block.valueOf();
        // console.log(timeText);
        timeCol.append(block);

    };
}


//checks the time every second
function checkTime() {
    setInterval(function() {
        console.log(nowHour);
    }, 1000);
}

//displays the current date in the header
function displayDate() {
    var currentDate = moment().format('MMM DD, YYYY');
    currentDayEl.text(currentDate);
}

//sets the current date for the header
setInterval(displayDate, 1000);

//calls checkTime function
checkTime();

//calls the function to create the rows in the planner
createRow();

// $(".saveBtn").on("click", function () {
//     var hour = $(this).attr("hour");
//     console.log(hour);

//     //set the appointment var to the value to the hour.value so that it can be stored as a value
//     var appointment = document.getElementById(hour).value;
//     console.log(appointment);
//     //puts the key(hour) and its value(event) into local storage
//     localStorage.setItem("hour", hour);
//     localStorage.setItem("appointment", appointment);

// })

// getAppointments();

// function getAppointments() {
// var hour = localStorage.getItem("hour");
// var appointment = localStorage.getItem("appointment");
// console.log(hour);
// console.log(appointment);

// if (!hour || !appointment) {
//     return;
// }
// }














// $(".saveBtn").on("click", function(){
//     var hour = $(this).attr("hour");
//     console.log($("#"+hour).val());
// })


// add eventlistener on the save button.
// on click on save, call function to 
// get value from textarea and put it in local storage

// on page load
// get values from localstorage and put in appropriate textarea

// on page load, get current time and for all time blocks add past, present or future 