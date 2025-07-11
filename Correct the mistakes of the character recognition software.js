/*function correct(string) {
    const result = string.split('').map(s => {
        switch (s) {
            case '0': {
                return 'O'
            }
            case '1': {
                return 'I'
            }
            case '5': {
                return 'S'
            }
            default:
                return s
        }
    }).join('')

    return result
}*/

function correct(string) {
    return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S')
}

console.log(correct('L0ND0N'))