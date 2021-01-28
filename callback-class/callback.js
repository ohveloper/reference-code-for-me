class Counter {
  constructor(callback) {
    this.count = 0;
    this.callback = callback;
  }
  increase() {
    this.count++;
    console.log(this.count);
    if (this.count % 5 === 0) {
      // callback함수를 전달인자로 받았다면 작동해라
      // 인스턴스를 생성할때 콜백함수를 전달인자로 넣지 않고 만들게 되면
      // 작동이 멈추고 시스템 에러난다
      this.callback && this.callback(this.count);
    }
  }
}
const print = (num) => {
  console.log("hello! ".repeat(num));
};
// str.repeat(count);
let count = new Counter(print);

count.increase();
count.increase();
count.increase();
count.increase();
count.increase();
