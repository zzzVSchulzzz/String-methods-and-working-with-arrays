/*
    На сайте Reddit ссылки на разделы (сабреддиты) формируются следующим образом: 
    https://reddit.com/r/название_раздела/. 
    Напишите функцию, которая принимает ссылку на раздел и 
    возвращает название раздела.
*/
let retSubReddit = function(link) {
    const startIndexOf = link.indexOf('/r/') + 3; //позиция, с которой начинаем выводить название раздела
          endIndexOf = link.indexOf('/', startIndexOf); //позиция, которая знаменует окончание раздела
          subReddit = link.substring(startIndexOf, endIndexOf); //с помощью метода substring() вырезаем название раздела

    return subReddit;
          
}

console.log(retSubReddit('https://reddit.com/r/название_раздела/'))

//Вариант из ответов
const getSubredditName = (link) => {
	const rIndex = link.indexOf('/r/');
          nameStartIndex = rIndex + 3;
  return link.slice(nameStartIndex, -1);
}

alert( getSubredditName('https://reddit.com/r/dankmemes/') )