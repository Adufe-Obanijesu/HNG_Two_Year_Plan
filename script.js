const timeEl = document.getElementById("utc-time");
const dayEl = document.getElementById("day");

// Get current UTC time
function getCurrentUTCTime() {
  const now = new Date();
  const utcString = now.toISOString().slice(11, 19).replace("T", " ");
  return utcString;
}

// Update time every second
function updateTime() {
  timeEl.textContent = getCurrentUTCTime();
}

// Initial call to display time
updateTime();

// Update time every second
setInterval(updateTime, 1000);

function getCurrentDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  return dayOfWeek;
}

// Update day every second
function updateDay() {
  dayEl.textContent = getCurrentDayOfWeek();
}

// Initial call to display day
updateDay();
