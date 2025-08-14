function accum(s) {
    return [...s].map(((el, index) => el.toUpperCase() + el.toLowerCase().repeat(index))).join('-')
}

console.log(accum('JiwpcSwslvW'))