//Dom variables
var currentDayEl = $("#currentDay");
var calendarContainerEl = $(".calendarContainer");
var nowHour = moment().format("HH:mm a");

//creates the array of scheduled times and events
var plannerFeatures = [
  {
    scheduledTime: "",
    event: "",
  },
  {
    scheduledTime: "",
    event: "",
  },
  {
    scheduledTime: "",
    event: "",
  },
  {
    scheduledTime: "",
    event: "",
  },
  {
    scheduledTime: "",
    event: "",
  },
  {
    scheduledTime: "",
    event: "",
  },
  {
    scheduledTime: "",
    event: "",
  },
  {
    scheduledTime: "",
    event: "",
  },
  {
    scheduledTime: "",
    event: "",
  },
];

var index = 0;

//creates the rows for the planner
function createRow() {
  calendarContainerEl.empty();

  //uses a for loop to populate the calendar container
  for (i = 0; i < 9; i++) {
    var row = $("<div>").addClass("row time-block");
    calendarContainerEl.append(row);
    //scheduled times
    var timeCol = $("<div>");
    timeCol.addClass("col-12 col-md-2 hour");
    timeColId = "row" + [i];
    timeCol.attr("id", timeColId);
    row.append(timeCol);
    //text area to enter appointments
    var appointmentDiv = $("<textArea>");
    appointmentDiv.addClass("col-12 col-md-9");
    appointmentId = [i];
    appointmentDiv.attr("id", appointmentId);
    appointmentDiv.val(plannerFeatures[i].event);
    row.append(appointmentDiv);
    //save button to save appointments
    var saveBtn = $("<button>");
    saveBtn.addClass("btn saveBtn col-12 col-md-1");
    dataIndex = [i];
    saveBtn.attr("data-index", dataIndex);
    saveBtn.append(
      "<img id='saveImg' class='icon' src='assets/images/save icon2.png'/>"
    );
    row.append(saveBtn);
    //populates the scheduled time column and formats colored rows
    var indexHour = index + 9;
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

//save button event listener function
$(".saveBtn").on("click", function(event) {
    event.preventDefault;
    alert("clicked");
    console.log($(this).attr("data-index"));
    var clickedIndex = $(this).attr("data-index");
    var appointmentId = $("#" + clickedIndex);
    console.log(appointmentId);
    var appt = appointmentId.val();
    var eventString = plannerFeatures[clickedIndex].event;
    eventString.concat(appt);
    console.log(eventString);
    localStorage.setItem("plannerFeatures", JSON.stringify(plannerFeatures));
    createRow();
  });

//sets the current date for the header
setInterval(displayDate, 1000);

//calls checkTime function
checkTime();

init();

