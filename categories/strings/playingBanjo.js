/**
 * Задача: Вернуть строку, играешь ли ты на банджо: если имя начинается на "R"/"r" — "plays banjo", иначе — "does not play banjo".
 */
const areYouPlayingBanjo = (name) => name.slice(0, 1).toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`

console.log(areYouPlayingBanjo('Ravel'))