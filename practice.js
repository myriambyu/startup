const playerName = document.querySelector('.user-name');
    playerName.textContent = this.getPlayerName();

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Unknown';
      }