//Javascript for Daily Scheduler

// Setting header date, retrieving stored data from local storage
function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        //Saving to local storage
        var schedule = localStorage.getItem(id);
        //For each time block, it will have the respecting scheduled values 
        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

setPlanner();
var saveBtn = $(".saveBtn");

// When save btn is clicked, each time blocks' attributes and values are stored to local storage
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();
    localStorage.setItem(time, schedule);
});

function pastPresentFuture() {
    var currentHour = parseInt(moment().format("HH"));
    // console.log("What is the current hour:", currentHour);

    //Grabbing the hour that each time block represents, we then compare to the current time, to display the correct colour-code on each time block.
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > currentHour) {
            $(this).addClass("future")
        }
        else if (thisHour === currentHour) {
            $(this).addClass("present");
        }
        else if (thisHour < currentHour){
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();



