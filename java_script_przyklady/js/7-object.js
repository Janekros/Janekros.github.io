'use strict'

var janek = {
    customerName: 'Jan Rosochacki', //tutaj zawsze przecinek
    phoneNumber: 517547596,
    orderConfirmation: function() {
        console.log('Jan Rosochacki właśnie złożyłeś zamówienie');
    }
}

var marcin = {
    customerName: 'Marcin Nowak',
    phoneNumber: 123456789,
    orderConfirmation: function() {
        console.log('Marcin Nowak właśnie złożyłeś zamówienie');
    }
}

/* dwa sposoby na wyciągnięcie danych z obiektu */

console.log(marcin.phoneNumber);
console.log(marcin['customerName']);

janek.orderConfirmation();

var kowalski = {
    customerName: 'Krzysztof Kowalski', //tutaj zawsze przecinek
    phoneNumber: 517547596,
    orderConfirmation: function() {
        console.log( this.customerName + ' właśnie złożyłeś zamówienie');
    }
}

kowalski.orderConfirmation();