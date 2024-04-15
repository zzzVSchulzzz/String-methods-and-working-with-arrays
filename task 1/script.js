/*
Напишите функцию match, которая принимает 2 строки и возвращает true, 
если эти строки равны без учета регистра. 
Например, match('hEllO', 'HELLo') должен вернуть true.
 */

const match = function match(str1, str2){
    if(str1.toLowerCase() == str2.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

match('helLo', 'HEllo')

/*  Задача решена через использование двух методов 
    (.toLowerCase() и .toUpperCaseCase()))
*/

const match2 = function match2(str1, str2){
    if(str1.toUpperCase() == str2.toUpperCase()){
        return true;
    }else{
        return false;
    }
}

match2('helLo', 'HEllo')

/*
    Использование метода localeCompare()

    Ещё один способ — использовать метод localeCompare(), 
    который сравнивает строки с учетом локали и может не учитывать регистр. 
    Для этого достаточно передать в метод параметр {sensitivity: 'base'}.
 */


const match3 = function match3(str1, str2){
    if(str1.localeCompare(str2, undefined, {sensitivity: 'base'}) == 0){
        return true;
    }else{
        return false;
    }
}

match3('helLo', 'HEllo')

