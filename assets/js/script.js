

//Dom variables
var currentDayEl = $("#currentDay");
var calendarContainerEl = $(".calendarContainer");
var nowHour = moment().format("HH:mm a");

var plannerFeatures = [
    {
      scheduledTime:  moment(9, "H").format("hh:mm a"),
      event: "Eat breakfast...just kidding.  Study.",
    },
    {
      scheduledTime:  moment(10, "H").format("hh:mm a"),
      event: "Kiss Myrtle.  Keep studying.",
    },
    {
      scheduledTime:  moment(11, "H").format("hh:mm a"),
      event: "Study study study.",
    },
    {
      scheduledTime:  moment(12, "H").format("hh:mm a"),
      event: "Study some more",
    },
    {
      scheduledTime:  moment(13, "H").format("hh:mm a"),
      event: "Study even more",
    },
    {
      scheduledTime:  moment(14, "H").format("hh:mm a"),
      event: "Yell at my computer.",
    },
    {
      scheduledTime:  moment(15, "H").format("hh:mm a"),
      event: "Get mad at my computer.",
    },
    {
      scheduledTime:  moment(16, "H").format("hh mm a"),
      event: "Feel dumb.",
    },
    {
      scheduledTime:  moment(17, "H").format("hh:mm a"),
      event: "Keep studying.",
    },
  ];



var index = 0;
//creates the rows for the planner
function createRow() {
  calendarContainerEl.empty();

  //uses a for loop to populate the calendar container
  for (i = 0; i < 9; i++) {
    var row = $('<div>').addClass('row time-block');
    calendarContainerEl.append(row);
        
    //scheduled times
    var timeCol = $('<div>').addClass('col-12 col-md-2 hour');
    timeCol.append($("<span>").text(plannerFeatures[i].scheduledTime));
    row.append(timeCol);

    
    //text area to enter appointments
    var appointmentDiv = $("<textArea>");
    appointmentDiv.addClass("col-12 col-md-9");
    appointmentId = i;
    appointmentDiv.attr("id", "'appointment"+i);
    appointmentDiv.val(plannerFeatures[i].event);
    row.append(appointmentDiv);
    
    //save button to save appointments
    var saveButton = $("<button>");
    saveButton.addClass("btn saveBtn col-12 col-md-1");
    // dataIndex = [i];
    // saveButton.attr("data-index", dataIndex);
    saveButton.attr("data-index", i);
    saveButton.append(
      "<img id='saveImg' class='icon' src='assets/images/save icon2.png'/>"
    );
    row.append(saveButton);

    //populates the scheduled time column and formats colored rows
    var indexHour = index + 9;
    var blockHour = moment(indexHour, "H").format("HH");
    var nowHourSpan = moment().format("HH");
       
    
    if (blockHour < nowHourSpan) {
      row.addClass("past");
    } else if (blockHour > nowHourSpan) {
      row.addClass("future");
    } else {
      row.addClass("present");
    }
    index++;
  }
}
//initial function
function init() {
  var itemsFromLocalStorage = JSON.parse(
    localStorage.getItem("plannerFeatures")
  );
  if (itemsFromLocalStorage !== null) {
    plannerFeatures = itemsFromLocalStorage;
  }
  createRow();
  
}

//checks the time every second
function checkTime() {
  setInterval(function () {
    console.log(nowHour);
  }, 1000);
}

//displays the current date in the header
function displayDate() {
  var currentDate = moment().format("MMM DD, YYYY");
  currentDayEl.text(currentDate);
}


//click event to collect appointment text and save to local storage
calendarContainerEl.on("click", ".saveBtn", function() {
    var clickedIndex = $(this).attr("data-index");
    console.log(clickedIndex);
    var appt = $('#appointment-' + clickedIndex).val();
    console.log(appt);
    plannerFeatures[clickedIndex].event = appt;
    localStorage.setItem("plannerFeatures", JSON.stringify(plannerFeatures));
    createRow();
});
    

//sets the current date for the header
setInterval(displayDate, 1000);

//calls checkTime function
checkTime();

init();

