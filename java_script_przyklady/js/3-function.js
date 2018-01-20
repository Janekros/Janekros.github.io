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
    return num1+num2; /* zwraca wartość funkcji i przerywa działanie funkcji */
}

dodajDwieLiczby(15, 30);
dodajDwieLiczby(6, 3);

/* Funkcja, która pobiera trzy parametry - imię, nazwisko i wzrost - i wyświetla w konsoli "Moje imię to ..., moje nazwisko to ... i mam x cm wzrostu*/

function imieNazwiskoWzrost(imie, nazwisko, wzrost) {
    
    console.log('Moje imię to: ' + imie + ', moje nazwisko to: ' + nazwisko + ' i mam ' + wzrost + 'cm wzrostu')
}

imieNazwiskoWzrost('Jan', 'Rosochacki', '180');



var wynikDodawania = dodajDwieLiczby(2,2);

console.log(wynikDodawania);
