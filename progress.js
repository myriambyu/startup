document.addEventListener("DOMContentLoaded", function() {
    const storedUsername = localStorage.getItem("username");
    document.getElementById("loggedInUsername").textContent = storedUsername; 
  });

const storedProgress = localStorage.getItem("storedProgress");


const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(progressBar => {
    progressBar.value = storedProgress * 20;
});


