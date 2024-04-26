/* 
Напишите функцию reverseAndNegate(arr), 
которая принимает массив чисел и возвращает перевернутый отрицательный массив.
Например: [1, -2, 5, 4] ⇒ [-4, -5, 2, -1].
*/

const reverseArrAndNegate = arr => {
    return arr.reverse().map(value => -value)
}

console.log(reverseArrAndNegate([1, -2, 5, 4]));