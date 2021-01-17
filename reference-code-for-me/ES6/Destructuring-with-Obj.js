const user = {
  first: "minkyo",
  last: "oh",
  age: 35,
};
const { first, last } = user;
first; // "minkyo"
last; // "oh"

const goodMorningCall = function ({ first, age }) {
  return `good morning ${first} (${age})`;
};
