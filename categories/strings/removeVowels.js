/**
 * Задача: Удалить все гласные (a, e, i, o, u) из строки (регистронезависимо).
 */
const disemvowel = str => str.replace(/[aeiou]/gi, '')

console.log(disemvowel('This website is for losers LOL!'))