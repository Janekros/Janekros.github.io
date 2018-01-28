'use strict';

function paragraphClick() {
    console.log('kliknąłem w paragraf');
}
// musimy w HTML dla danego elementu dodatc atrybut, który wykona funkcję

function changeHeaderText() {
    document.querySelector('h1').innerText = 'Zmiana';
}

document.querySelector('h1').onclick = changeHeaderText; // bez () za nazwą funkcji, nie musimy wstawiać nic w pliku HTML


function changeBackground() {
    document.getElementById('parFirst')
        .style.backgroundColor = 'red';
}


document.getElementById('parFirst').addEventListener('click', changeBackground); // click wybieramy z listy eventów, musimy napisać funkcję, która będzie wykonywana po kliknięciu


document.querySelectorAll('.superlink')[1].addEventListener('click', function(){

   console.log('click w link'); document.getElementById('parFirst').removeEventListener('click', changeBackground);
}); // blokuje funkcje zmiany tła po kliknięciu na odpowiedni link


document.getElementsByTagName('a')[1].addEventListener('click', function(event){
    event.preventDefault();
    event.stopPropagation();// zatrzymuje kliknięcie na elementy rodziców itp.
    console.log('nie przeładowuje strony');
    console.log(event.type);
    this.style.backgroundColor = 'yellow'; // this znaczy dla tego klikniętoego elementu
}); // blokujemy przejście na inna stronę po kliknięciu w link

