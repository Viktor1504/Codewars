/**
 * Задача: Дана строка из двух слов (имя и фамилия). Вернуть инициалы в формате "X.Y" в верхнем регистре.
 */
'use strict'

const abbrevName = (name) => name.split(' ').map(n => n[0].toUpperCase()).join('.')


console.log(abbrevName('Sam Harris'))