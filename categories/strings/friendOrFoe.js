/**
 * Задача: Фильтровать список имён, оставив только те, что длиной ровно 4 символа.
 */
const friend = (friends) => friends.filter(f => f.length = 4)


console.log(friend(["Ryan", "Kieran", "Mark"]))