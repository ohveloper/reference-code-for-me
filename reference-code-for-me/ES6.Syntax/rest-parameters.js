const munltipleNums = function (x, ...numbs) {
  let result = 0;
  console.log(numbs);
  numbs.forEach(function (num) {
    result += x * num;
  });
  return result;
};
