let isAnagram = (test, original) => {
    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
}

console.log(isAnagram("dumble", "bumble"))