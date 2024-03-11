document.addEventListener("DOMContentLoaded", function() {
    const storedUsername = localStorage.getItem("username");
    document.getElementById("loggedInUsername").textContent = storedUsername; 
  });

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

function populateNextCard() {
  resetCard();
  front.innerHTML = `<h4>${words[current].finnish}</h4>`;
  back.innerHTML = `<h4>${words[current].english}</h4>`;
  current++;
  localStorage.setItem("storedProgress", current);
  fetch('/api/storedProgress', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(current)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Stored progress updated:', data);
  })
  .catch(error => {
    console.error('Error updating stored progress:', error);
  });
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

