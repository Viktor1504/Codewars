/**
 * Задача: Преобразовать скорость (км/ч) в см/с и округлить вниз до целого.
 */
function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600)
}

console.log(cockroachSpeed(1))