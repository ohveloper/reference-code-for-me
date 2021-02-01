// A,B,C 랜덤으로 출력된다
/* const printString = (string) => {
	setTimeout(
		() => {
			console.log(string)
		},
		Math.floor(Math.random() * 100) + 1
	)
}

const printAll = () => {
	printString('A')
	printString('B')
	printString('C')
}
*/
// 순서대로 출력된다
const printString = (string, callback) => {
  setTimeout(() => {
    console.log(string);
  }, Math.floor(Math.random() * 100) + 1);
};
// callback hell
const printAll = () => {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
};
