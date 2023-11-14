const getCount = str => (str.match(/[aeiou]/gi) || []).length

console.log(getCount('fdsfqfy     fAa df'))