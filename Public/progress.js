document.addEventListener("DOMContentLoaded", async function() {
  const storedUsername = localStorage.getItem("username");
  document.getElementById("loggedInUsername").textContent = storedUsername; 



    let storedProgress = [];

    let storedProgress = null;
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/storedProgress');
      storedProgress = await response.json;
      async function getStoredProgressForUser() {
        const response = await fetch('/api/storedProgress');
        const userData = await response.json();
        return userData;
      }
      const username = localStorage.getItem('username');
      progressCollection = await getStoredProgressForUser();
      if (userData.length) {
        // Extract storedProgress values into an array
        const storedProgressArray = userData.map(progress => progress.storedProgress);

        // Sort the storedProgressArray from greatest to least
        storedProgressArray.sort((a, b) => b - a);

        // Return the biggest number (first element in the sorted array)
        storedProgress = storedProgressArray[0];
    }
    } catch {
      // If there was an error then just use the last saved scores
      storedProgress = localStorage.getItem('storedProgress');
    }
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(progressBar => {
    progressBar.value = storedProgress * 20;
  });
  const percentElements = document.querySelectorAll('.percent');
  percentElements.forEach(percentElement => {
    percentElement.textContent = (storedProgress * 20) + "%";
  });
  const percentFood = document.querySelector('.foodPercent');
  percentFood.textContent = 20 * storedProgress + "%";
  const percentColors = document.querySelector('.colorsPercent');
  percentColors.textContent = 20 * storedProgress + "%";
  const percentVerbs = document.querySelector('.verbsPercent');
  percentVerbs.textContent = 20 * storedProgress + "%";
});
function displayUsername(data) {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      const containerEl = document.querySelector('#weekUser');
      const number = Math.floor(Math.random() * data.length);
      const user = data[number];
      const usernameEl = document.createElement('p');
      usernameEl.textContent = `Username: ${user.login}`;
      usernameEl.textContent = `User of the Day: ${user.login}`;
      containerEl.appendChild(usernameEl);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}
displayUsername();
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