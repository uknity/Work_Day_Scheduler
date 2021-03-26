//Dom variables
var currentDayEl = $("#currentDay");
var calendarContainerEl = $(".calendarContainer");
var rowEl = $(".row");
var timeEl = $(".time");
var nowHour = moment().format("hh-mm-ss");
var nineam = $("#9am");

// var setTime = object[i]("")
function createRow() {
    for (i=0; i < 2; i++) {
    // var index = [i];
    
        var index = [i];
        var row =$("<div>");
        row.addClass("row time-block");
        row.addClass("[i]");
        // row.attr('class, 'row'');
        // row.attr("class, "time-block");
        // row.attr("id, "row[i]"");
        
        calendarContainerEl.append(row);
        var timeCol = $("<div>");
        timeCol.addClass("col-12 col-md-2 hour [i]");
        row.append(timeCol);

        var textArea = $("<textarea>");
        textArea.addClass("col-12 col-md-9 [i]");
        row.append(textArea);
        i++;

        var save = $("<btn>");
        save.addClass("btn saveBtn col-12 col-md-1 [i]")
        save.addClass("hour[i]");
        row.append(save);

        // var saveImg = $('<img src="assets/images/save icon2.png">');
        // saveImg.addClass=("icon");
        save.append("<img id='saveImg' class='icon' src='assets/images/save icon2.png'/>");
        
    };

}

createRow();


// function createRow() {
//     var row[index] =$("<div>");
//     row.attr("class, "row");
//     row.attr("class, "time-block")
//     calendarContainerEl.append(row)
// }

function checkTime() {
    setInterval(function() {
        console.log(nowHour);
    }, 1000);
}

console.log(nowHour);

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    currentDayEl.text(rightNow);
}

setInterval(displayTime, 1000);

checkTime();

$(".saveBtn").on("click", function () {
    var hour = $(this).attr("hour");
    console.log(hour);

    //set the appointment var to the value to the hour.value so that it can be stored as a value
    var appointment = document.getElementById(hour).value;
    console.log(appointment);
    //puts the key(hour) and its value(event) into local storage
    localStorage.setItem("hour", hour);
    localStorage.setItem("appointment", appointment);

})

getAppointments();

function getAppointments() {
var hour = localStorage.getItem("hour");
var appointment = localStorage.getItem("appointment");
console.log(hour);
console.log(appointment);

// if (!hour || !appointment) {
//     return;
// }
}








// alkj;dkls = [
//     {time: "9AM",
//     moment: "9"}
// ]
//when creating a for loop, have an array of objects that correspond with the index of the for loop

// var object[i]


// nineam = moment().set("hour", 9, "minute", 00);
// console.log(nineam);


// function colorRow() {

//     for (i=)
// }
//callback functions


    //when user clicks save, var hour is created with the attribute for that hour


//    for (i=0; i<9; i++) {



// if (hour == "eleven") {
//     $("#eleven").textContent = appointment;
// }

// $("#eleven").textContent = "hello";
// console.log(appointment);
// console.log($("#eleven"));
// document.querySelector("#11").textContent = appointment;
// document.querySelector("#hour").textContent = appointment;

// document.getElementById(' hour ').textContent = appointment;


// $("hourId").text() = appointment;




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