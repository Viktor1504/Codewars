/**
 * Задача: Вычислить количество листов: если n>0 и m>0, вернуть n*m, иначе 0.
 */
const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0

console.log(paperwork(-1, 5))