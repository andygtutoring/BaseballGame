// Pitcher.js
// Pitcher Class (inherits from Player)
class Pitcher extends Player {
  constructor(name, position, era, whip) {
    super(name, position);
    this.era = era;
    this.whip = whip;
  }

  allowHit() {
    return Math.random() > (this.whip / 10); // Adjusted threshold
  }
}
