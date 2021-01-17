const arr = [1, 2, 3, 4, 5];

const [first, second, third] = arr;

first; // 1

const plusToTwoNumber = function ([first, second]) {
  return first + second;
};

plusToTwoNumber(arr); // 3
