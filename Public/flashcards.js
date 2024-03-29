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
  { finnish: "mansikka", english: "strawberry"}
];

let current = 0;
let turned = false;

// Configure WebSocket
function configureWebSocket() {
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

  this.socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    if (msg.type === GameEndEvent) {
      displayMsg(msg.username);
    } 
  };
}

// Reset card function
function resetCard() {
  prev.disabled = false;
  next.disabled = false;
  card.classList.remove("turned");
}

// Populate next card function
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
    broadcastEvent(username, GameEndEvent, newScore);
  }
  const progressCollection = await response.json();
  localStorage.setItem('progressCollection', JSON.stringify(progressCollection));   
}

// Get next card function
function getNextCard() {
  if (current < words.length) {
    populateNextCard();
  } else {
    next.disabled = true;
  }
}

// Get previous card function
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

// Flip card function
function flip(e) {
  turned = !turned;
  if (turned) {
    this.classList.add("turned");
  } else {
    this.classList.remove("turned");
  }
}

// Display message function
function displayMsg(username) {
  const containerEl = document.querySelector('#masteredUser');
  const usernameEl = document.createElement('p');
  usernameEl.textContent = `${username} mastered this set`;
  containerEl.appendChild(usernameEl);
}

// Event listeners
card.addEventListener("click", flip);

// Initialize WebSocket
configureWebSocket();