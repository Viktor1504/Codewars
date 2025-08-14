/**
 * Задача: Перемножить все элементы массива и вернуть произведение.
 */
const grow = (x) => x.reduce((sum, currentValue) => sum * currentValue, 1)

console.log(grow([1, 2, 4]))