const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

function Asteroid(options) {
  
  this.COLOR = 'black';
  this.RADIUS = '10';
  
  const moArgs = { color: this.COLOR, 
    radius: this.RADIUS, 
    pos: options.pos, 
    vel: Util.randomVec(Math.random()*10),
    game: options.game 
  };
  
  MovingObject.call(this, moArgs);
  
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;