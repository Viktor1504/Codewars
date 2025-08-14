/**
 * Задача: Суммировать элементы массива чисел (пустой массив даёт 0).
 */
const sum = (numbers) => numbers.reduce((acc, number) => acc + number, 0)

console.log(sum([]))