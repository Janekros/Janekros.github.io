'use strict'

/* typ liczbowy */
var liczba = 10;
console.log(liczba);

var liczbaZmiennoporzecinkowa = 3.14; /* zawsze z kropką */
console.log(liczbaZmiennoporzecinkowa);

/* typ łańcuchowy - string */
var name = 'Janek'; /* cudzysłów może być pojedyńczy ' lub podwójny " */
console.log(name);

var wzrost = 180 + 'cm'; /* JavaScript odczyta jako ciąg znaków */
console.log(wzrost);

/* Znaki specjalne np.' */
var exampleString = 'This is Luke\'s light sword'
console.log(exampleString);

/* typ logiczny - boolean */

var prawda = true;
console.log(prawda);

var sprawdzam = (3 == 1);
console.log(sprawdzam);

var sprawdzam1 = (3 > 1);
console.log(sprawdzam1);

/* typy specjalne */

var niezidentyfikowana;
console.log(niezidentyfikowana);

var nic = null;
console.log(nic);

/* co się stanie jak będziemy mnożyć przez null */
console.log(12 * null);
console.log('test' * null);
console.log(null * 10);

/* połączenie typów zmiennych */

console.log('4' + 3);
console.log('4' - 3);
console.log('4' * 3);
console.log('4' / 3);
console.log('4' / 0);
/* dziwna rozkmina dlaczego tak jest */
