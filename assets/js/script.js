//Dom variables
var currentDayEl = $("#currentDay");
var calendarContainerEl = $(".calendarContainer");
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
        textAreaId = [i];
        textArea.attr('id', textAreaId);
        row.append(textArea);
        
        var save = $("<btn>");
        save.addClass("btn saveBtn col-12 col-md-1")
        saveId = [i];
        save.attr('hour', saveId);
        save.append("<img id='saveImg' class='icon' src='assets/images/save icon2.png'/>");
        row.append(save); 

        var indexHour = parseInt([i]) + parseInt(9);
        var block = moment(indexHour, "H").format("HH:mm a");
        timeCol.append(block);
        var blockHour = moment(indexHour, "H").format("HH");
        console.log(blockHour);
        var nowHourSpan = moment().format("HH");
        console.log(nowHourSpan);
            if (blockHour < nowHourSpan) {
                row.addClass("past");
            } else  if (blockHour > nowHourSpan) {
                row.addClass("future");
            } else {
                row.addClass("present");
            }
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

// $(document).ready(function() {
    $(".saveBtn").click(function(){
        var hour = $(this).attr('hour');
        console.log(hour);
        var appointment = $('#' + hour);
        console.log(appointment);
        var appt = appointment.val();
        console.log(appt);
               
        //puts the key(hour) and its value(event) into local storage
        localStorage.setItem("hour", hour);
        localStorage.setItem("appointment", appt);
    })
 

function getAppointments() {
var hour = localStorage.getItem("hour");
var appointment = localStorage.getItem("appointment");
console.log(hour);
console.log(appointment);
console.log(typeof hour);
console.log(typeof appointment);

if (!hour || !appointment) {
    return;
} else {
        var textAreaId = $("#" + hour);
        console.log(textAreaId);
        textAreaId.innerHtml = appointment;   
        }
    }



function init() {
    getAppointments();
}

init();