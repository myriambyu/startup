document.addEventListener("DOMContentLoaded", function() {
    const storedUsername = localStorage.getItem("username");
    document.getElementById("loggedInUsername").textContent = storedUsername; 
  });

const card = document.querySelector("#vocab");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const questions = [];

let current = 0;
let turned = false;