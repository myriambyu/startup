function DisplayUserName () {
    const playerName = document.querySelector('.User-name');
    playerName.textContent = this.getPlayerName();

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Unknown';
    }   
}
