const invert = (array) => array.map(el => -el)

console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));