
// Get all time blocks
const timeBlocks = document.querySelectorAll(".time-block");

// Get the current date and time
function getCurrentDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return now.toLocaleDateString('en-US', options);
  }
  
  // Update the date and time in the header every second
  function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = getCurrentDateTime();
  }
  
  // Call the updateDateTime function every second
  setInterval(updateDateTime, 1000);

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


