const Car = function (postion) {
  this.postion = postion;
};

Car.prototype.move = function () {
  this.postion += 1;
};

let car1 = new Car(10);
car1.move();
car1.position;

function Person(first, last, age, gender, interests) {
  // property and method definitions
  this.try = 0;
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = {
    ...interests, // 구조분해 이용해서 배열을 입력받고 유사객체 형식으로 재배열
  };
  //...see link in summary above for full definition
}

Person.prototype.check = function () {
  this.try += 1;
};

let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);

person1;

// 임의의 작동 함수를 만들어줄때 prototype 을 이용해서 연결시켜준다
// class.porototype.trigger = function() {
//  this.somethin = some do
//}
