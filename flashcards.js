document.addEventListener("DOMContentLoaded", function() {
    const storedUsername = localStorage.getItem("username");
    document.getElementById("loggedInUsername").textContent = storedUsername; 
  });

const card = document.querySelector("#vocab");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const questions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" }];

let current = 0;
let turned = false;

function resetCard() {
  prev.disabled = false;
  next.disabled = false;
  card.classList.remove("turned");
}

function populateNextCard() {
  resetCard();
  front.innerHTML = `<p>${questions[current].question}</p>`;
  back.innerHTML = `<p>${questions[current].answer}</p>`;
  current++;
}
function getNextCard() {
  if (current < questions.length) {
    populateNextCard();
  } else {
    next.disabled = true;
  }
}
function getPrevCard() {
  if (current > 1) {
    resetCard();
    front.innerHTML = `<p>${questions[current - 2].question}</p>`;
    back.innerHTML = `<p>${questions[current - 2].answer}</p>`;
    current--;
  } else {
    prev.disabled = true;
  }
}