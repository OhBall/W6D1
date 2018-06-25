/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroid.js":
/*!*************************!*\
  !*** ./lib/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\n\nfunction Asteroid(options) {\n  \n  this.COLOR = 'black';\n  this.RADIUS = '10';\n  \n  const moArgs = { color: this.COLOR, \n    radius: this.RADIUS, \n    pos: options.pos, \n    vel: Util.randomVec(Math.random()*10),\n    game: options.game \n  };\n  \n  MovingObject.call(this, moArgs);\n  \n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./lib/asteroid.js?");

/***/ }),

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\n// window.MovingObject = MovingObject;\nconst Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n// window.Util = Util;\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./lib/game_view.js\");\n\n\n// const canvasEl = document.getElementById(\"game-canvas\");\n// const ctx = canvasEl.getContext(\"2d\");\n// window.ctx = ctx;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n    const canvasEl =  document.getElementById(\"game-canvas\");\n    const ctx = canvasEl.getContext(\"2d\");\n    const game = new Game({DIM_X: 750,DIM_Y: 750, NUM_ASTEROIDS: 100});\n    console.log(game);\n    const gameView = new GameView(game, ctx);\n    gameView.start();\n  });\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./lib/asteroid.js\");\n\nfunction Game(options){\n  this.DIM_X = options.DIM_X;\n  this.DIM_Y = options.DIM_Y;\n  this.DIMS = [this.DIM_X, this.DIM_Y];\n  this.NUM_ASTEROIDS = options.NUM_ASTEROIDS;\n  this.asteroids = [];\n  this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function() {\n  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {\n    let asteroid = new Asteroid({pos: this.randomPosition(), game: this});\n    this.asteroids.push(asteroid);\n  }\n};\n\nGame.prototype.randomPosition = function() {\n  return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  for (var i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function() {\n  for (var i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].move();\n  }\n};\n\nGame.prototype.wrap = function(pos) {\n  let newPos = [pos[0], pos[1]];\n  for (var i = 0; i < newPos.length; i++) {\n    if (newPos[i] < 0) {\n      newPos[i] = this.DIMS[i];\n    } else if (newPos[i] > this.DIMS[i]) {\n      newPos[i] = 0;\n    }\n  }\n  return newPos;\n};\n\nGame.prototype.checkCollisions = function() {\n  for (var i = 0; i < this.asteroids.length; i++) {\n    for (var j = i + 1; j < this.asteroids.length; j++) {\n      if (this.asteroids[i].isCollidedWith(this.asteroids[j])){\n        alert(\"COLLISION\");\n      }\n    }\n  }\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Game = require(\"./game.js\");\n\nfunction GameView(game, ctx){\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  function step(){\n    this.game.draw(this.ctx);\n    this.game.moveObjects();\n  }\n  setInterval(step.bind(this), 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\nfunction MovingObject (options) {\n  console.log(options);\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\n\nMovingObject.prototype.move = function() {\n  this.pos[0] = this.pos[0] + this.vel[0];\n  this.pos[1] = this.pos[1] + this.vel[1];\n  this.pos = this.game.wrap.call(this.game, this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  if (Util.distance(this.pos,otherObject.pos) < this.radius + otherObject.radius) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\n\n\n\n\nmodule.exports = MovingObject;\n// let mo = new MovingObject( {pos: 0, vel: 0, color: 'red', radius: 5} );\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function surrogate() {}\n    surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  \n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  distance(pos1,pos2) {\n    return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2);\n  }\n\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ })

/******/ });