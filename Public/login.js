
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function login(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      localStorage.setItem("username", username);
      window.location.href = "practice.html";
    });
  });