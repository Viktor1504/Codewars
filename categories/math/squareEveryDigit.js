/**
 * Задача: Заменить каждую цифру числа на её квадрат и склеить обратно.
 */
const squareDigits = (num) => {
    return Number(num.toString().split('').map(el => el ** 2).join(''))
}

console.log(squareDigits(123))