/**
 * Задача: Найти индекс слова "needle" в массиве и вернуть строку с позицией.
 */
const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf('needle')}`

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))