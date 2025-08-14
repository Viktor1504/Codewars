/**
 * Задача: Отсортировать массив чисел по возрастанию (учесть null/undefined).
 */
function solution(nums) {
    return nums === null ? [] : nums.sort((a, b) => a - b)
}

console.log(solution(null))