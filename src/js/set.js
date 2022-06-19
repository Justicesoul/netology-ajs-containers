export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(player) {
    if (this.members.has(player)) {
      throw Error('the player already exists');
    } else {
      this.members.add(player);
    }
  }

  addAll(...players) {
    players.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}
