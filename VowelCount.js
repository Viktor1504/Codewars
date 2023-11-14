const getCount = str => (str.match(/[aeiou]/gi) || []).filter(letter => letter !== 'y').length

console.log(getCount('fdsfqfy     fAa df'))