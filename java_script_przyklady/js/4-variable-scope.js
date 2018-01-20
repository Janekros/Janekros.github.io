'use strict'

function example() {
    var exampleVariable = 10;
    /* zmienna z funkcji jest dostępna tylko z poziomu funkcji */
    
    return exampleVariable;
}

function newExample() {
    var exampleVariable = 20;
    
    return exampleVariable;
}

/* nie możemy wywołać wartości zmiennej, która znajduje sie w funkcji tak bezpośrednio tylko dopiero po wywołaniu funkcji */

var variableOutsideFunction = example();
var variableOutsideFunction2 = newExample();

console.log(variableOutsideFunction);
console.log(variableOutsideFunction2);

/* zmienne wewnątrz funkcji mogą się powtarzać, ponieważ wywołujemy funkcję, a nie bezpośrednio zmienną w nią zawartą */