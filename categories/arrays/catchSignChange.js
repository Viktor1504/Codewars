function catchSignChange(arr) {
    return arr.reduce((acc, item, index, array) => {
        if (index < array.length - 1) {
            const currentZone = item >= 0
            const nextZone = array[index + 1] >= 0
            if (currentZone !== nextZone) {
                acc++
            }
        }
        return acc;
    }, 0)
}

console.log(catchSignChange([1, -3, -4, 0, 5, -1]))