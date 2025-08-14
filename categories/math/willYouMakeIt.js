/**
 * Задача: Проверить, хватит ли топлива добраться: mpg * fuelLeft >= distance.
 */
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (distanceToPump / mpg) <= fuelLeft
}

console.log(zeroFuel(100, 50, 1))