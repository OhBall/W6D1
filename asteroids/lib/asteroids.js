const MovingObject = require("./moving_object.js");
// window.MovingObject = MovingObject;
const Util = require("./util.js");
// window.Util = Util;
const Asteroid = require("./asteroid.js");

const Game = require("./game.js");
const GameView = require("./game_view.js");


// const canvasEl = document.getElementById("game-canvas");
// const ctx = canvasEl.getContext("2d");
// window.ctx = ctx;


document.addEventListener("DOMContentLoaded", function(event) {
    const canvasEl =  document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");
    const game = new Game({DIM_X: 750,DIM_Y: 750, NUM_ASTEROIDS: 100});
    console.log(game);
    const gameView = new GameView(game, ctx);
    gameView.start();
  });
