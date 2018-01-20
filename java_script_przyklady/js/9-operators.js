'use strict'


/* operatory arytmetyczne */


var resztaZDzielenia = 6%4;
console.log(resztaZDzielenia);


/* postinkrementacja */
console.log(resztaZDzielenia++);
console.log(resztaZDzielenia++);


/* preinkrementacja */
var liczba = 1;
console.log(liczba);
console.log(++liczba);
console.log(++liczba);


/* operatory przypisania */

var number = 100; // = nie oznacza równości tylko przypisanie 
console.log(number);

number += 20; // alternatywa dla number = number + 20
console.log(number);

number *= 2;
console.log(number);

/* operatory logiczne */

console.log(2 == 2);

console.log(3 != 3);

console.log(2 === 1);

console.log(3 !== 2);



/* operatory logiczne */

console.log((2==2) && (3<2));

var parzystaCzyNieparzysta = (number%2 == 0 ) ? 'parzysta':'nieparzysta';
console.log(parzystaCzyNieparzysta);