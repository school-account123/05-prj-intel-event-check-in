const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  if (!name || !team) return;

  // Increase total attendee count
  count++;
  document.getElementById("attendeeCount").textContent = count;

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100);
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage + "%";

  // Update greeting
  document.getElementById("greeting").textContent =
    `Welcome, ${name} from ${teamName}!`;

  // Update team count
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Reset form
  form.reset();
});
