/**
 * Задача: Подсчитать количество гласных (a, e, i, o, u) в строке.
 */
const getCount = str => (str.match(/[aeiou]/gi) || []).length

console.log(getCount('fdsfqfy     fAa df'))