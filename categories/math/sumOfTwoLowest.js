function sumTwoSmallestNumbers(numbers) {
    const sortedNumbers = [...numbers].sort((a, b) => a - b).slice(0, 2)
    return sortedNumbers[0] + sortedNumbers[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))