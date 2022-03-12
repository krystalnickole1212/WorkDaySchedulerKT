//create the elements
var dateAndTime = document.createElement("currentDay");
var currentHour = moment().hours();
var saveBtn = document.querySelectorAll(".saveBtn");

//display date and time at top of scheduler
dateAndTime = moment().format('MMMM Do YYYY, hh:mm:ss a');
console.log(dateAndTime);

document.getElementById("currentDay").innerHTML = dateAndTime;

document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY, hh:mm a");


$(document).ready(function(){
    //on click, enter event in time block
    //local storage saves event
    $(".saveBtn").on("click", function (event) {
        var dataId = $(event.target).data("id")
       
         var text = $(this).closest(".row").find(".description").val()
        
         
        localStorage.setItem(dataId, text);
        console.log(dataId);
        console.log(text);
    })
})

//var militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
//time block is in the present
// get current number of hours
// loop over time blocks
$('.description').each(function () {
    var blockHour = parseInt(
        $(this)
            .attr('id')
    );
    console.log(currentHour, blockHour)

    //past hours
    if (blockHour < currentHour) {
        $(this).addClass("past")
    }

    //current hours 

    else if (blockHour === currentHour) {
        $(this).addClass("present")
        $(this).removeClass("past")
    }

    //future hours

    else {
        $(this).addClass("future")
        $(this).removeClass("past")
        $(this).removeClass("present")
     }

})
