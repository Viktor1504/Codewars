function doubleChar(str) {
    return [...str].reduce((acc, item) => {
        acc += item.repeat(2)
        return acc
    }, '')
}

console.log(doubleChar('Hello World'))
