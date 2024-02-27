document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      var username = document.getElementById("username").value;
      localStorage.setItem("username", username);
      window.location.href = "practice.html";
    });
  });
  