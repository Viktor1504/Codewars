/**
 * Задача: Преобразовать DNA-строку в RNA, заменив все символы "T" на "U".
 */
'use strict'

function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U')
}

console.log(DNAtoRNA('GCAT'))