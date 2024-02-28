document.addEventListener("DOMContentLoaded", function() {
    const storedUsername = localStorage.getItem("username");
    document.getElementById("loggedInUsername").textContent = storedUsername; 
  });

const storedProgress = localStorage.getItem("storedProgress");


const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(progressBar => {
    progressBar.value = storedProgress * 20;
});

document.addEventListener('DOMContentLoaded', function() {
  const percentElement = document.querySelector('.percent');

  percentElement.textContent = 20 * storedProgress + "%";
});

document.addEventListener('DOMContentLoaded', function() {
  const percentElement = document.querySelector('.foodPercent');

  percentElement.textContent = 20 * storedProgress + "%";
});
document.addEventListener('DOMContentLoaded', function() {
  const percentElement = document.querySelector('.colorsPercent');

  percentElement.textContent = 20 * storedProgress + "%";
});
document.addEventListener('DOMContentLoaded', function() {
  const percentElement = document.querySelector('.verbsPercent');

  percentElement.textContent = 20 * storedProgress + "%";
});

document.addEventListener('DOMContentLoaded', function() {
  const countInput = document.getElementById('count');
  
  function increaseCount() {
      
      let currentValue = parseInt(countInput.value);
      currentValue++;
      countInput.value = currentValue;
  }
  setInterval(increaseCount, 5000);
});