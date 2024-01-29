
// Get all time blocks
const timeBlocks = document.querySelectorAll(".time-block");

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




