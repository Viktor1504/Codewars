/**
 * Задача: Вернуть массив A без элементов, присутствующих в массиве B.
 */
const arrayDiff = (a, b) => a.filter(el => !b.includes(el));

console.log(arrayDiff([1, 2, 2, 2, 3], [2, 15, 5]))