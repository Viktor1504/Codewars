/**
 * Задача: Сформировать массив из n кратных числа x: x, 2x, ..., nx.
 */
function countBy(x, n) {
    let z = []
    for (let i = 1; i <= n; i++) {
        z.push(x * i)
    }
    return z
}

console.log(countBy(5, 4))