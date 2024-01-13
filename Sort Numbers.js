function solution(nums) {
    return nums.toSorted((a, b) => a - b)
}

console.log(solution([1, 2, 10, 50, 5]))