//create the elements
var dateAndTime = document.createElement("currentDay");
var militaryHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var saveBtn = document.querySelectorAll(".saveBtn");

//display date and time at top of scheduler
dateAndTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(dateAndTime);
document.getElementById("currentDay").innerHTML = dateAndTime;

document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY");

//time block is in the present
for (var i = 0; i < 9; i++) {
    if (currentHour === militaryHour[i]) {
      console.log(i);
      document.getElementById(i).classList.add("present");
    }
//time block is in the past
if (currentHour > militaryHour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("past");
  }
//time block is in the future
if (currentHour < militaryHour[i]) {
    console.log(i);
    document.getElementById(i).classList.add("future");
  }

//on click, enter event in time block 


//local storage saves event 


//event persists