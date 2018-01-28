'use strict';

document.getElementsByTagName('a')[1].href = 'https://google.com'; // zmieniamy wartość atrybutu

/* Napisz funkcję, która zwróci tablicę z wartościami atrybutu href dka wszystkich linków na stronie */

function getAllHrefs() {
    var hrefsArray = [];
    var linksCollection = document.getElementsByTagName('a');

    for (var i = 0; i < linksCollection.length; i++) {
        hrefsArray.push(linksCollection[i].href);
    }

    return hrefsArray;

}

console.log(getAllHrefs);



var parFirst = document.getElementById('parFirst');

parFirst.className = 'nowa-klasa'; // dodaje nową klasę do obiektu i nadpisuje poprzednie jakie były

parFirst.classList.add('jeszcze-nowsza-klasa', 'test');

parFirst.className += ' najnowsza klasa'; // dodaje klase nie nadpisując tych, które już były, ważne żeby była spacja

parFirst.classList.remove('test'); //usuwa wybraną klasę

//parFirst.removeAttribute('class'); // usuwamy atrybut class