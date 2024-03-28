document.addEventListener("DOMContentLoaded", function() {
    const storedUsername = localStorage.getItem("username");
    document.getElementById("loggedInUsername").textContent = storedUsername; 
  });

const GameEndEvent = 'gameEnd';
const card = document.querySelector("#vocab");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const words = [
  { finnish: "oppia", english: "to learn" },
  { finnish: "kärsivällinen", english: "patient" },
  { finnish: "onnellinen", english: "happy" },
  { finnish: "syödä", english: "to eat"},
  { finnish: "mansikka", english: "strawberry"}];

let current = 0;
let turned = false;

words.fontSize

function resetCard() {
  prev.disabled = false;
  next.disabled = false;
  card.classList.remove("turned");
}
  // Fetch data from the server
  async function populateNextCard() {
    resetCard();
    front.innerHTML = `<h4>${words[current].finnish}</h4>`;
    back.innerHTML = `<h4>${words[current].english}</h4>`;
    current++;
    localStorage.setItem("storedProgress", current);
    const username = localStorage.getItem('username');
    const newScore = {name: username, storedProgress: current};
    const response = await fetch('/api/storedProgress', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });
    if (current == 5) {
      this.broadcastEvent(username, GameEndEvent, newScore);
    }
    const progressCollection = await response.json();
    localStorage.setItem('progressCollection', JSON.stringify(progressCollection));
     
  }
  
  


function getNextCard() {
  if (current < words.length) {
    populateNextCard();
  } else {
    next.disabled = true;
  }
}
function getPrevCard() {
  if (current > 1) {
    resetCard();
    front.innerHTML = `<h4>${words[current - 2].finnish}</h4>`;
    back.innerHTML = `<h4>${words[current - 2].english}</h4>`;
    current--;
  } else {
    prev.disabled = true;
  }
}
function flip(e) {
  turned = !turned;
  if (turned) {
    this.classList.add("turned");
  } else {
    this.classList.remove("turned");
  }
}


card.addEventListener("click", flip);

displayMsg() {
  const containerEl = document.querySelector('#masteredUser');
  const usernameEl = document.createElement('p');
  usernameEl.textContent = `${username} mastered this set`;
  containerEl.appendChild(usernameEl);
}

