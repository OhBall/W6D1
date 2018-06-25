const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

const Util = require("./util.js");
window.Util = Util;

const Asteroid = require("./asteroid.js");

const ast = new Asteroid({pos: [50,50]});

const Game = require("./game.js");
const game = new Game({DIM_X: 750,DIM_Y: 750, NUM_ASTEROIDS: 10});
window.game = game;

const canvasEl = document.getElementById("game-canvas");
const ctx = canvasEl.getContext("2d");
window.ctx = ctx;

game.draw(ctx);
game.moveObjects();