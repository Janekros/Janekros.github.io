'use strict';
/* rzeczy, które generują błędy nie będą uruchomione
np. nie pozwoli nadpisać zmiennej bez jej wcześniejszego zadeklarowania */

/* Tworzenie zmiennych w JS */

var empty;
var example = 12;
var newExample = 20;

let newNewExample = 'Cześć';

/* zmienne nazywamy małą literą*/

var yourName = 'Jan Rosochacki'

example = 16;
/* nadpisuje wcześniej zadeklarowaną zmienną */

example = newExample;
/* przypisujemy wartość zmiennej newExample dla zmiennej example ( nadpisujemy) */

empty = false;

console.log(example);
console.log(empty);
console.log(newNewExample);