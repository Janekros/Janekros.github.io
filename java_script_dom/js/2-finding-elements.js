'use strict';

var sekcja = document.getElementById('sectionFirst');
console.log(sekcja);

var klasy = document.getElementsByClassName('link');
console.log(klasy);


var paragrafy = document.getElementsByTagName('p');
console.log(paragrafy);

var linkiWDivach = document.querySelectorAll('div .link');
console.log(linkiWDivach);


var linkiWDivach = document.querySelectorAll('div .link:first-of-type');
console.log(linkiWDivach);
// wyświetla w consoli jako kolekcja HTML


var linkiWDivach2 = document.querySelectorAll('div a');
console.log(linkiWDivach2);


var pierwszyParagraf = document.querySelector('p');
console.log(pierwszyParagraf);
// wyświetla w consoli jako pojedyńczy element bez kolekcji HTML

/* dla pojedyńczego elementu możemy zmieniać np. color, dla kolekcji już nie */