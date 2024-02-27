function login() {
    const playerName = document.querySelector("#name");
    localStorage.setItem("userName", playerName.value);
    window.location.href = "practice.html";
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        localStorage.setItem("username", username);
        document.getElementById("userInfo").style.display = "block";
        document.getElementById("loggedInUsername").textContent = username;
    });
  
  });