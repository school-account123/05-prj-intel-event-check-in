const form = document.getElementById("CheckInForm");
const nameInput = document.getElementById("attendeeNaame");
const teamSelect = document.getElementById("teamSelect");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

count++
console.log("totalcheckins" , count);

const percentage = Math.round ((count / maxcount) * 100) + '5'
console.log('Progress:' ${percentage});

const teamCounter = document.getElementById(team + "Count");
teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

const message = 'welcome, ' '${name} from ${teamName}' ';

form.reset();

});
