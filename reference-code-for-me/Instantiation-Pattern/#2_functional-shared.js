const extend = function (to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};

const someMethod = {};
someMethod.move = function () {
  this.position += 1;
};

const Car = function (position) {
  const someInstance = {
    position: position,
  };
  extend(someInstance, someMethod);
  return someInstance;
};

let car10 = Car(10);
car10.move();
car10;
car10.position;
