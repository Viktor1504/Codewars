/**
 * Задача: Вернуть массив чисел от n до 1.
 */
const reverseSeq = n => {
    const result = [];
    for (let i = n; i > 0; i--) {
        result.push(i);
    }
    return result;
};


console.log(reverseSeq(5))