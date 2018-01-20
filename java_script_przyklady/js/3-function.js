'use strict';

/* Deklaracja funkcji */

function example() {
    console.log('To jest przykladowa funkcja');
}
/* deklaracja funkcji muszą być nawiasy po nazwie */

/* Wywołanie funkcji */

example(); 

var anonim = function() {
    console.log('to jest funkcja anonimowa');
}
/* inny sposób deklaracji funkcji */

anonim();

console.log(anonim);


/* Funkcja z parametrami */

function dodajDwieLiczby(num1, num2) {
       
    console.log(num1+num2);
}

dodajDwieLiczby(15, 30);
dodajDwieLiczby(6, 3);