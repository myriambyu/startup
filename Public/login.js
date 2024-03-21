(async () => {
  const username = localStorage.getItem('username');
  if (username) {
    document.querySelector('#username').textContent = username;
    setDisplay('loginControls', 'none');
    setDisplay('playControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('playControls', 'none');
  }
})();


function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}



  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function login(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      localStorage.setItem("username", username);
      window.location.href = "practice.html";
    });
  });
