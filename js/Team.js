// Team.js
// Team Class
class Team {
  constructor(name) {
    this.name = name;
    this.batters = [];
    this.pitchers = [];
  }

  addBatter(batter) {
    this.batters.push(batter);
  }

  addPitcher(pitcher) {
    this.pitchers.push(pitcher);
  }
}
