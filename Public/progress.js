document.addEventListener("DOMContentLoaded", async function() {
  const storedUsername = localStorage.getItem("username");
  document.getElementById("loggedInUsername").textContent = storedUsername; 

  let storedProgress = null;
  try {

    const response = await fetch('/api/storedProgress');
    storedProgress = await response.json();
    localStorage.setItem("storedProgress", storedProgress);
  } catch (error) {
  
    console.error('Error fetching storedProgress:', error);
    storedProgress = localStorage.getItem("storedProgress");
  }

  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(progressBar => {
    progressBar.value = storedProgress * 20;
  });

  const percentElements = document.querySelectorAll('.percent');
  percentElements.forEach(percentElement => {
    percentElement.textContent = (storedProgress * 20) + "%";
  });
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