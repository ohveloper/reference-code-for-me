class Human {
  constructor(name) {
    this.name = name;
  }
  sleep() {
    console.log("zzz");
  }
}

class Student extends Human {
  // 부모 자식간에 아규먼트가 같을 경우에 아래부분을 생략할수도 있다
  // 아규먼트가 같을 경우에 아래부분은 생략할수가 있다
  // constructor(name) {
  //   super(name);
  // }
  learn() {
    console.log("배우는중");
  }
}

// 아규먼트가 같을 경우에 생력할수 있다
