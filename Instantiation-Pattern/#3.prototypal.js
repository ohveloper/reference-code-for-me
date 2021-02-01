const someMethod = {};
someMethod.move = function () {
  this.position += 1;
};

const Car = function (position) {
  const someInstance = Object.create(someMethod);
  someInstance.position = position;
  return someInstance;
};

let car10 = Car(10);
car10.move();
