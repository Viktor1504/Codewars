/**
 * Задача: Суммировать уникальные элементы массива.
 */
function uniqueSum(lst) {
    if (lst.length === 0) {
        return null
    }
    const uniqueArray = [...new Set(lst)]; // Set удаляет дубликаты
    return uniqueArray.reduce((acc, currentValue) => acc + currentValue, 0)
}

console.log(uniqueSum([-1, -1, 5, 2, -7]))