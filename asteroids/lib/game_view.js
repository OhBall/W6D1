// const Game = require("./game.js");

function GameView(game, ctx){
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  function step(){
    this.game.draw(this.ctx);
    this.game.moveObjects();
  }
  setInterval(step.bind(this), 20);
};

module.exports = GameView;