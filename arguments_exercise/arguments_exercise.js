function sum() {
  let answer = 0;
  for (let i = 0; i < arguments.length; i++) {
    answer += arguments[i];
  }
  return answer;
}

// console.log(sum(1,2,3,4));

function sum2(...numbers) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer;
}

// console.log(sum2(1,2,3,4));

Function.prototype.myBind = function (context,...bindArgs) {
  return (...callArgs) => {
    return this.apply(context,(bindArgs.concat(callArgs)));
  };
};

Function.prototype.myBind2 = function (context) {
  const bindArgs = Array.from(arguments).slice(1);
  const that = this;
  return function () {
    return that.apply(context, bindArgs.concat(Array.from(arguments)));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
// 
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
// 
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind2(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
// 
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind2(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
// 
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind2(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
// 
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind2(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true


function sumThree(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, l) => { return acc + l ; });
    } else {
      return _curriedSum;
    }
  };
}

// const a = curriedSum(5);
// console.log(a(1)(2)(3)(4)(5));


Function.prototype.curry = function (numArgs) {
  const args = [];
  const that = this;
  return function _curry (arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _curry;
    }
  };
};

Function.prototype.curry2 = function (numArgs) {
  const args = [];
  const that = this;
  return function _curry2 (arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curry2;
    }
  };
};

let a = sum.curry2(4);
a(4)(3)(2);
console.log(a(1));