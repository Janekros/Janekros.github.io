'use strict';

var parent = document.getElementById('parSecond').parentElement;
console.log(parent);

//parent.style.backgroundColor = 'red';

var parFirst = document.getElementById('parFirst');
console.log(parFirst.childNodes);
console.log(parFirst.childNodes[10])// 'wyciągamy' z tabeli element z indeksem 10
console.log(parFirst.children);// tylko znaczniki
console.log(parFirst.children[4]);
console.log(parFirst.firstElementChild);
console.log(parFirst.lastElementChild);// jakbyśmy użyli first/last child to wyświetliłoby nam element z pierwszej listy zawierający również entery, komentarze it.


var parSecond = document.getElementById('parSecond');
console.log(parSecond.nextElementSibling);
console.log(parSecond.previousElementSibling);
console.log(parSecond.previousElementSibling.previousElementSibling);// wywołujemy jeszcze wcześniejsze rodzeństwo
