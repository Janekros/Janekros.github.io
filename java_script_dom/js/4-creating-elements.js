'use ctrict';

var newParagraph = document.createElement('p');
console.log(newParagraph); // tworzymy sobie nowy obiekt, jeszcze jest pusty

var paragraphText = document.createTextNode('To jest treść nowego paragrafu');
console.log(paragraphText);

newParagraph.appendChild(paragraphText);
console.log(newParagraph); // łączymy teks z paragrafem, dokładnie umieszczmy test wewnątrz paragrafu

newParagraph.setAttribute('class', 'new-par-class');

document.getElementById('sectionFirst').insertBefore(newParagraph, document.getElementById('parSecond'));

var parSecond = document.getElementById('parSecond');

parSecond.parentElement.insertBefore(newParagraph, parSecond); // inny sposób dodania w odpowiednim miejscu

var parSecond = document.getElementById('parSecond');

parSecond.parentElement.insertBefore(newParagraph, parSecond.nextSibling); // dodajemy za jakimś elementem

parSecond.replaceChild(newParagraph, parSecond.firstElementChild); // paragraf znajdujący się w div#parSecond nowym paragrafem

document.getElementById('sectionFirst').removeChild(document.querySelector('header'));


/* manipulacja DOM */

var parFirst = document.getElementById('parFirst');

parFirst.innerHTML = '<h1>Cześć</h1>'; // dodaje element podmieniając jego zawartość, wszystko co było wcześniej znika, zostaje wczytany jako część kodu HTML

parFirst.innerText = '<h1>Cześć</h1>'; // dodaje ciąg znaków, wyrzucając zawartość, nie zostaje wczytany jako część kodu HTML

parFirst.outerHTML = '<h1>Cześć</h1>'; // usuwa znacznik do, którego się odwoływaliśmy i wchodzi na jego miejsce jako element kodu HTML 