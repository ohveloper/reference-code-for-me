const muntiple = (x, y) => x * y;
const double = (x) => x * 2;

// map & Arrow function
const mapDoubleValues = (values) => values.map((vlaue) => vlaue * 2);
doubleValues([1, 2, 3]); // [2,4,6]

// filter & Arrow function
const filterOddValues = (arr) => arr.filter((x) => x % 2 === 0);
filterOddValues([1, 2, 3, 4, 5]);

// reduce & Arrow function
const reduceValues = (arr) => arr.reduce((x, y) => x + y, 1000000);
reduceValues([1, 2, 3, 4, 5]);
