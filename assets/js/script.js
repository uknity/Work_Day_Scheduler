//Dom variables
var currentDayEl = $("#currentDay");
var calendarContainerEl = $(".calendarContainer");
var nowHour = moment().format("HH:mm a");



var plannerFeatures = [{
    scheduledTime: "",
    event: "",
}, {
    scheduledTime: "",
    event: "",
}, {
    scheduledTime: "",
    event: "",
}, {
    scheduledTime: "",
    event: "",
}, {
    scheduledTime: "",
    event: "",
}, {
    scheduledTime: "",
    event: "",
}, {
    scheduledTime: "",
    event: "",
}, {
    scheduledTime: "",
    event: "",
}, {
    scheduledTime: "",
    event: "",
}]

var index = 0;

//creates the rows for the planner
function createRow() {
    calendarContainerEl.empty();

    for (i = 0; i < 9; i++) {
        var row = $("<div>").addClass("row time-block");
        calendarContainerEl.append(row);

        var timeCol = $("<div>");
        timeCol.addClass("col-12 col-md-2 hour");
        timeColId = "row" + [i];
        timeCol.attr('id', timeColId);
        row.append(timeCol);

        var appointment = $("<div>");
        appointment.addClass("col-12 col-md-9");
        appointmentId = [i];
        appointment.attr('id', appointmentId);
        var appointmentText = 
        row.append(appointment);

        var saveButton = $('<btn>');
        saveButton.addClass("btn saveBtn col-12 col-md-1");
        dataIndex = [i];
        saveButton.attr("data-index", dataIndex);
        saveButton.append("<img id='saveImg' class='icon' src='assets/images/save icon2.png'/>");
        row.append(saveButton);
        
        var indexHour = (index + 9);
        var blockHour = moment(indexHour, "H").format("hh:mm a");
        console.log(blockHour);
        timeCol.append(blockHour);
        var nowHourSpan = moment().format("HH");
        
        
        if (blockHour < nowHourSpan) {
            row.addClass("past");
            } else if (blockHour > nowHourSpan) {
                row.addClass("future");
                } else {
                    row.addClass("present");
                }
        index++;   
   }   }   

        function init() {
            var itemsFromLocalStorage = JSON.parse(localStorage.getItem("plannerFeatures"));
            if (itemsFromLocalStorage !== null) {
                plannerFeatures = itemsFromLocalStorage;
            }
            createRow();
        }

        $(".saveBtn").click(function (event) {
            event.preventDefault();
            console.log($(this).attr("data-index"));
            var clickedIndex = $(this).attr("data-index");
            var appointmentId = $('#' + clickedIndex);
            console.log(appointmentId);
            var appt = appointmentId.val();
            var eventString = plannerFeatures[clickedIndex].event;
            eventString.concat(appt);
            console.log(eventString);
            localStorage.setItem("plannerFeatures", JSON.stringify(plannerFeatures));
            createRow();
        });

        function renderAppointments() {
            var array = JSON.parse(localStorage.getItem("plannerFeatures"));
            var scheduledTime = array.scheduledTime;
            var eventR = array.appointment;
            var b = eventR;
            console.log(b);
            if (b !== null) {

                document.getElementById(b).innerHTML = appointmentR;
                console.log(hourR);
                console.log(appointmentR);
                console.log(typeof hourR);
                console.log(typeof appointmentR);

            } else {
                return;
            }
        }

        init();

        //checks the time every second
        function checkTime() {
            setInterval(function () {
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

        

        // $(document).ready(function() {
        // $(".saveBtn").click(function (event) {
        //     event.preventDefault();
        //     var hour = $(this).attr('hour');
        //     console.log(hour);
        //     var appointment = $('#' + hour);
        //     console.log(appointment);
        //     var appt = appointment.val();
        //     var array = {
        //         hour: hour,
        //         appointment: appt
        //     }
        //     console.log(array);
        //     localStorage.setItem("array", JSON.stringify(array));
        //     // localStorage.set("hour", hour);
        //     // localStorage.set("appointment", appt)

        //     renderAppointments();
        // })











        

        


        //puts the key(hour) and its value(event) into local storage

        // localStorage.setItem("hour", hour);
        // localStorage.setItem("appointment", appt);

        // var appointment = $('#' + hour);
        //     console.log(appointment);
        //     var appt = appointment.val();
        //     console.log(appt);
        //     var getAppt = 
        //     var hour = localStorage.getItem("appointments", JSON.parse());
        // var appointment = localStorage.getItem("appointment");
        // console.log(hour);
        // console.log(appointment);
        // console.log(typeof hour);
        // console.log(typeof appointment)