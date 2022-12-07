// flap map nos devuelve una matriz de otra

const array = [1, 2, 3, 2, [1, 2, 34, 0, [1, 2, 3, 90]]]
const newArray = array.flat((3));
console.log(newArray);

// flatmap
const total = [1, 2, 3, 2];
console.log(total.flatMap(value => [value, value * 10]));

