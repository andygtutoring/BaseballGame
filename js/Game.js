// Game.js
// Game Class
class Game {
  constructor(homeTeam, awayTeam) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = 0;
    this.awayScore = 0;
    this.inning = 1;
    this.gameLog = [];
    this.currentBatter = null;
    this.currentPitcher = null;
  }

  playAtBat() {
    // Select random batter and pitcher
    this.currentBatter = this.awayTeam.batters[Math.floor(Math.random() * this.awayTeam.batters.length)];
    this.currentPitcher = this.homeTeam.pitchers[Math.floor(Math.random() * this.homeTeam.pitchers.length)];

    // Display current at-bat
    document.getElementById("current-at-bat").innerText = `${this.currentBatter.name} vs ${this.currentPitcher.name}`;

    // Enable swing button
    document.getElementById("swing-button").disabled = false;
  }

  swing() {
    // Determine outcome of at-bat
    if (this.currentBatter.getHit() && this.currentPitcher.allowHit()) {
      this.gameLog.push(`${this.currentBatter.name} gets a hit!`);
      if (Math.random() < 0.5) {
        this.awayScore++;
        this.gameLog.push(`${this.currentBatter.name} scores! Away team takes the lead.`);
      }
    } else {
      this.gameLog.push(`${this.currentPitcher.name} strikes out ${this.currentBatter.name}.`);
    }

    // Update scoreboard and game log
    this.updateScoreboard();
    this.displayGameLog();

    // Move to next at-bat
    this.playNextAtBat();
  }

  playNextAtBat() {
    // Check if inning is over
    if (this.inning > 9) {
      this.gameLog.push("Game over. Final score: Home " + this.homeScore + ", Away " + this.awayScore + ".");
      this.displayGameLog();
      return;
    }

    // Check if side is retired
    if (this.gameLog.filter(log => log.includes("strikes out")).length % 3 === 0) {
      this.inning++;
      document.getElementById("inning").innerText = "Inning: " + this.inning;
      // Switch teams
      [this.awayTeam, this.homeTeam] = [this.homeTeam, this.awayTeam];
    }

    // Play next at-bat
    this.playAtBat();
  }

  updateScoreboard() {
    document.getElementById("home-team-score").innerText = "Home Team: " + this.homeScore;
    document.getElementById("away-team-score").innerText = "Away Team: " + this.awayScore;
  }

  displayGameLog() {
    const logElement = document.getElementById("log");
    logElement.innerHTML = "";
    this.gameLog.forEach((entry) => {
      const li = document.createElement("li");
      li.innerText = entry;
      logElement.appendChild(li);
    });
  }
}
