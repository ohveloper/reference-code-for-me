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
};
printAll();
