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
  { finnish: "What is the capital of France?", english: "Paris" },
  { finnish: "What is 2 + 2?", english: "4" },
  { finnish: "Who wrote 'Romeo and Juliet'?", english: "William Shakespeare" }];

let current = 0;
let turned = false;

function resetCard() {
  prev.disabled = false;
  next.disabled = false;
  card.classList.remove("turned");
}

function populateNextCard() {
  resetCard();
  front.innerHTML = `<p>${words[current].finnish}</p>`;
  back.innerHTML = `<p>${words[current].english}</p>`;
  current++;
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
    front.innerHTML = `<p>${words[current - 2].finnish}</p>`;
    back.innerHTML = `<p>${words[current - 2].english}</p>`;
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