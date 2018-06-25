Function.prototype.inherits = function (parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function Cat() {
  
}

function Animal() {
}

Animal.prototype.dosomeshit = function() {
  console.log("It worked!");
};
// Cat.inherits(Animal);
// let c = new Cat();
// c.dosomeshit();


Function.prototype.inherits2 = function (parent) {
  const surrogate = Object.create(parent.prototype);
  this.prototype = surrogate;
  this.prototype.constructor = this;
};

Cat.inherits2(Animal);
let c = new Cat();
c.dosomeshit();

Cat.prototype.catMethod = function () {
  console.log('meow');
};

const animal = new Animal();
// animal.catMethod();