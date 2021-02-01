function gotoCodeStates() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1, go to codestates");
    }, 1000);
  });
}

function siaAndCode() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2. code, code, code,,");
    }, 1000);
  });
}

function eatLunch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3. eat lunch");
    }, 1000);
  });
}

function goToBed() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("4. goToBed");
    }, 1000);
  });
}
//async, await
const result = async () => {
  const one = await gotoCodeStates();
  console.log(one);

  const two = await siaAndCode();
  console.log(two);

  const three = await eatLunch();
  console.log(three);

  const four = await goToBed();
  console.log(four);
};

result();
