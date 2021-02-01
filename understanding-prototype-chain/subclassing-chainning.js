const Human = function (name) {
  this.name = name;
};
const Student = function (name) {
  Human.call(this, name); // Human 으로 올리기 위해서 설정
};

Human.prototype.sleep = function () {
  console.log("zzz");
};

// 부모의 prototype을 다 가져오고 싶을때
Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student; // constructor 를 이어주기 위해서

// 학생 자체의 메소드를 만들고 싶을때
// Student.prototype.sleep = function () {
// console.log("선생님: 학생이 잠은!!!!");
// };

let steve = new Human("steve");
steve.sleep();

let minkyo = new Student("minkyo");
minkyo.sleep();

// steve instanceof Human; // steve가 Human 의 instance 인지 check
// minkyo instanceof Student;
// minkyo.__proto__.constructor;
