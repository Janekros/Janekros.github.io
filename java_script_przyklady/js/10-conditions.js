'use strict'

var number = 10;

/* warunek if */
if (number > 5) {
    console.log('liczba jest większa od 5') // jeśli to nie będzie prawda to program nic nie wyświetli 
}


/* warunek if else */

if (number < 3) {
    console.log('Liczba jest mniejsza od 3')
} else {
    console.log('Liczba jest większa od 3')
}


/* warunek else if */
if (number < 10) {
    console.log('Liczba jest mniejsza od 10');
} else if (number >= 10 && number <= 20) {
    console.log('Liczba jest z przedziału 10-20');
} else {
    console.log('Liczba jest większa od 20');
} // program sprawdza warunki do pierwszego, który jest spełniony i kończy działanie warunku!!!



/* Switch */

var color = 'niebieski';

switch (color) {
    case 'red':
        console.log('Kolor jest czerwony');
        break;

    case 'green':
        console.log('Kolor jest zielony')
        break;
        
    default:
        console.log('Kolor jest inny niż zielony lub czerwony')
} 
