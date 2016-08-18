function Player(n, s, r) {
    this.name = n;
    this.score = s;
    this.rank = r;
}

Player.prototype.logInfo = function () {
    console.log("I am", this.name);
}

Player.prototype.promote = function () {
    this.rank++;
    console.log("My new rank is:", this.rank);
}

var simon = new Player("Simon", 100, 5)
var nikki = new Player("Nikki", 101, 10)

simon.logInfo();
simon.promote();
nikki.logInfo();
nikki.promote();
