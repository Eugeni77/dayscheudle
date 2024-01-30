
// Get all time blocks
const timeBlocks = document.querySelectorAll(".time-block");

//the parent element to append the new element to the body:
var parentElement = document.body;

// we create and element with :
var newElement = document.createElement("div");
newElement.id = "current-date";

parentElement.appendChild(newElement);

var currentDate = dayjs().format("YYYY-MM-DD");
$("#current-date").text(currentDate);
var currentTime = dayjs().format("HH:mm");

// Load events from local storage
function loadEvents() {
  const savedEvents = JSON.parse(localStorage.getItem("events"));

  if (savedEvents) {
    timeBlocks.forEach((timeBlock, index) => {
      const eventTextarea = timeBlock.querySelector(".event");
      eventTextarea.value = savedEvents[index] || "";
    });
  }
}

// Save events to local storage
function saveEvents() {
    const events = [];
  
    timeBlocks.forEach((timeBlock) => {
      const eventTextarea = timeBlock.querySelector(".event");
      events.push(eventTextarea.value);
    });
  
    localStorage.setItem("events", JSON.stringify(events));
  }
  
  // Add event listeners to save buttons
  timeBlocks.forEach((timeBlock) => {
    const saveButton = timeBlock.querySelector(".save-btn");
    saveButton.addEventListener("click", saveEvents);
  });
  
  // Load events on page load
  window.addEventListener("load", loadEvents);


