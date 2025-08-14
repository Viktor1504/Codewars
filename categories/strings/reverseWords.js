/**
 * Задача: Развернуть порядок слов в строке, разделённых пробелами.
 */
const reverseWords = (str) => str.split(' ').map(word => [...word].reverse().join('')).join(' ')

console.log(reverseWords('Pavel Viktor'))