'use strict'   


/* deklaracja zmiennej przechowującej tablicę(arrays) */

var emptyArray = [];
console.log(emptyArray);

var exampleArray = [1, 'Cześć', true, null];
console.log(exampleArray);


/* przypisywanie elementów z tablicy */

var arrayElement = exampleArray[1];
console.log(arrayElement);

exampleArray[3] = '60';
console.log(exampleArray);

exampleArray[4] = false;
console.log(exampleArray);

/*exampleArray[10] = '100';
console.log(exampleArray);*/



/* metody tablicowe */

exampleArray.push('Hello');
console.log(exampleArray);
/* dodaje następną 'szufladę', rozpycha tabelę */

exampleArray.pop();
console.log(exampleArray);
/* usuwa ostatnią 'szufladę', zmniejsza tabelę */

exampleArray.pop();
console.log(exampleArray);

var lastArrayElement = exampleArray.pop();
console.log(lastArrayElement);
console.log(exampleArray);


/* dodaje element na poczatku tablicy */
exampleArray.unshift('Siema');
console.log(exampleArray);

/* usuwa pierwszy element tablicy */
exampleArray.shift();
console.log(exampleArray);

exampleArray.unshift('Siema');
console.log(exampleArray);


/* wstaw dwa elementy na 2 i 3 indeksie tablicy exampleArray - np. ciąg znaków i liczbę */

exampleArray[2] = 'Janek';
console.log(exampleArray);

exampleArray.splice(2, 0, 'cos', 10);
console.log(exampleArray);

/* długość tablicy */
console.log(exampleArray.length);


/* tablice wielowymiarowe */

var tablicaDwuwymiarowa = [
    ['Cześć', 'kolego'], 
    ['Janek', 'Rosochacki']
];
console.log(tablicaDwuwymiarowa);
console.log(tablicaDwuwymiarowa[0][1]); /* wybieramy jakąś wartość z tablicy, w ty przypadku 0 wiersz 1 kolumna (są kolumny 0 i 1!!!) */


/* odwracanie i sortowanie */
exampleArray.reverse();
console.log(exampleArray);

exampleArray.sort();
console.log(exampleArray);