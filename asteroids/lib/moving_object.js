function MovingObject (options) {
  console.log(options);
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};


MovingObject.prototype.move = function() {
  this.pos[0] = this.pos[0] + this.vel[0];
  this.pos[1] = this.pos[1] + this.vel[1];
};







module.exports = MovingObject;
// let mo = new MovingObject( {pos: 0, vel: 0, color: 'red', radius: 5} );
