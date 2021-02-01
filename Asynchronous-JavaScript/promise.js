// callback 함수 안받음
const printString = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
};

const printAll = () => {
  printString("A")
    .then(() => {
      return printString("B");
    })
    .then(() => {
      return printString("C");
    });
  //.catch()를 이용해서 마지막 체이닝에서 에러를 잡아낸다
  // callback 보다 훨씬 간결하고 편안
};
printAll();
