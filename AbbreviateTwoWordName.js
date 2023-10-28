'use strict'

const abbrevName = (name) => name.split(' ').map(n => n[0].toUpperCase()).join('.')


console.log(abbrevName('Sam Harris'))