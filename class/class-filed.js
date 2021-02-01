class Foo {
  constructor(name = "") {
    this.name = name; // 클래스 필드의 선언과 초기화
  }
}
const foo = new Foo("Lee");
console.log(foo); // Foo { name: 'Lee' }
