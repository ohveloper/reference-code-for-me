const Car = function () {
  const someInstance = {};
  someInstance.position = 0;
  someInstance.move = function () {
    this.position += 1;
  };
  return someInstance;
};

let car1 = Car();
car1.move();
car1.position;
