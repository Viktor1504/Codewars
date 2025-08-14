/**
 * Задача: Проверить, является ли число точным квадратом целого числа.
 */
const isSquare = (n) => Number.isInteger(Math.sqrt(n))

console.log(isSquare(9))