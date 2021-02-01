const FakeArray = function () {};

FakeArray.prototype = Array.prototype;

const fakeArray = new FakeArray();

fakeArray.push(1);
console.log(fakeArray);

fakeArray instanceof FakeArray;

// push 는 되지만 concat은 안되는현상이!?
