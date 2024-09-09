// baseball.js
// This is the main run file that starts and controls the entire game!
// Create teams and players
const homeTeam = new Team("Padres");
const awayTeam = new Team("Cardinals");

homeTeam.addBatter(new Batter("Jake Cronenworth", "1B", 0.300)); // 30% average
homeTeam.addBatter(new Batter("Xander Bogaerts", "2B", 0.250)); // 25% average
homeTeam.addBatter(new Batter("Manny Machado", "3B", 0.300)); // 30% average
homeTeam.addBatter(new Batter("Ha-Seong Kim", "SS", 0.300)); // 30% average
homeTeam.addBatter(new Batter("Jurickson Profar", "LF", 0.300)); // 30% average
homeTeam.addBatter(new Batter("Jackson Merrill", "CF", 0.300)); // 30% average
homeTeam.addBatter(new Batter("Fernando Tatis Jr", "RF", 0.300)); // 30% average
homeTeam.addBatter(new Batter("Gary Sanchez", "C", 0.300)); // 30% average
homeTeam.addBatter(new Batter("Nelson Cruz", "DH", 0.300)); // 30% average
homeTeam.addPitcher(new Pitcher("Matt Waldron", "SP", 3.50, 1.20)); // 3.50 ERA, 1.20 WHIP
homeTeam.addPitcher(new Pitcher("Tim Hill", "RP", 2.50, 1.00)); // 2.50 ERA, 1.00 WHIP
homeTeam.addPitcher(new Pitcher("Mark Melancon", "CP", 2.50, 1.00)); // 2.50 ERA, 1.00 WHIP

awayTeam.addBatter(new Batter("Paul Goldschmidt", "1B", 0.280)); // 28% average
awayTeam.addBatter(new Batter("Tommy Edman", "2B", 0.260)); // 26% average
awayTeam.addBatter(new Batter("Nolan Arenado", "3B", 0.280)); // 28% average
awayTeam.addBatter(new Batter("Masyn Winn", "SS", 0.260)); // 26% average
awayTeam.addBatter(new Batter("Alec Burleson", "LF", 0.280)); // 28% average
awayTeam.addBatter(new Batter("Tyler O'Neill", "CF", 0.260)); // 26% average
awayTeam.addBatter(new Batter("Jordan Walker", "RF", 0.280)); // 28% average
awayTeam.addBatter(new Batter("Andrew Knizner", "C", 0.260)); // 26% average
awayTeam.addBatter(new Batter("Lars Nootbaar", "DH", 0.280)); // 28% average
awayTeam.addPitcher(new Pitcher("Adam Wainwright", "SP", 3.00, 1.10)); // 3.00 ERA, 1.10 WHIP
awayTeam.addPitcher(new Pitcher("Matthew Liberatore", "RP", 2.80, 1.05)); // 2.80 ERA, 1.05 WHIP
awayTeam.addPitcher(new Pitcher("Giovanny Gallegos", "CP", 3.00, 1.10)); // 3.00 ERA, 1.10 WHIP

// Create game instance
const game = new Game(homeTeam, awayTeam);

// Play game
game.playAtBat();

// Add event listener for swing button
document.getElementById("swing-button").addEventListener("click", () => {
  game.swing();
  document.getElementById("swing-button").disabled = true;
  setTimeout(() => {
    document.getElementById("swing-button").disabled = false;
  }, 100); // Re-enable button after a short delay
});
