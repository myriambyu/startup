document.addEventListener("DOMContentLoaded", function() {
    const storedUsername = localStorage.getItem("username");
    document.getElementById("loggedInUsername").textContent = storedUsername; 
      });


document.addEventListener("DOMContentLoaded", async function loadProgress() {
  let const storedProgress = [];
  try {
    // Get the latest high scores from the service
    const response = await fetch('/api/storedProgress');
    storedProgress = await response.json();
    localStorage.setItem("storedProgress", storedProgress);
 
  } catch {
    // If there was an error then just use the last saved scores
    storedProgress = localStorage.getItem("storedProgress");
}
});

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
  const countInput = document.getElementById('countFood');
  
  function increaseCount() {
      
      let currentValue = parseInt(countInput.value);
      currentValue++;
      countInput.value = currentValue;
  }
  setInterval(increaseCount, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
  const countInput = document.getElementById('countColors');
  
  function increaseCount() {
      
      let currentValue = parseInt(countInput.value);
      currentValue++;
      countInput.value = currentValue;
  }
  setInterval(increaseCount, 4000);
});

document.addEventListener('DOMContentLoaded', function() {
  const countInput = document.getElementById('countVerbs');
  
  function increaseCount() {
      
      let currentValue = parseInt(countInput.value);
      currentValue++;
      countInput.value = currentValue;
  }
  setInterval(increaseCount, 6000);
});