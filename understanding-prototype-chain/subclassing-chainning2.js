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
// Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student; // constructor 를 이어주기 위해서
Student.prototype.sleep = function () {
  // 부모나 다른 클래스에서 같은 메소드를 빌려오고 싶을때
  // 같은 메소드를 사용하지만 두가지 각기 다른 효과를 내고 싶을때
  // 휴먼은 zzz만 나오고 학생은 zzz, 학생이 잠은!! 두개가 나오게 하고싶을때
  Human.prototype.sleep.apply(this);
  console.log("선생님: 학생이 잠은!!!!");
};

let steve = new Human("steve");
steve.sleep();

let minkyo = new Student("minkyo");
minkyo.sleep();

// steve instanceof Human; // steve가 Human 의 instance 인지 check
// minkyo instanceof Student;
// minkyo.__proto__.constructor;
