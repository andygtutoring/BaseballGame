// Batter.js
// Batter Class (inherits from Player)
class Batter extends Player {
  constructor(name, position, avg) {
    super(name, position);
    this.avg = avg;
  }

  getHit() {
    return Math.random() < this.avg;
  }
}
