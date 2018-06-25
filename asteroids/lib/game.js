const Asteroid = require('./asteroid.js');

function Game(options){
  this.DIM_X = options.DIM_X;
  this.DIM_Y = options.DIM_Y;
  this.DIMS = [this.DIM_X, this.DIM_Y];
  this.NUM_ASTEROIDS = options.NUM_ASTEROIDS;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
    let asteroid = new Asteroid({pos: this.randomPosition(), game: this});
    this.asteroids.push(asteroid);
  }
};

Game.prototype.randomPosition = function() {
  return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function() {
  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
};

Game.prototype.wrap = function(pos) {
  let newPos = [pos[0], pos[1]];
  for (var i = 0; i < newPos.length; i++) {
    if (newPos[i] < 0) {
      newPos[i] = this.DIMS[i];
    } else if (newPos[i] > this.DIMS[i]) {
      newPos[i] = 0;
    }
  }
  return newPos;
};

Game.prototype.checkCollisions = function() {
  for (var i = 0; i < this.asteroids.length; i++) {
    for (var j = i + 1; j < this.asteroids.length; j++) {
      if (this.asteroids[i].isCollidedWith(this.asteroids[j])){
        alert("COLLISION");
      }
    }
  }
};

module.exports = Game;