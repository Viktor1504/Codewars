const capitals = (word) => {
    const result = [...word].reduce((acc, symbol, index) => {
        if (symbol >= 'A' && symbol <= 'Z') {
            acc.push(index)
        }
        return acc
    }, [])
    return result
}

console.log(capitals('Паша'))