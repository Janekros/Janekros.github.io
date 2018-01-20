'use strict'

/*var janek = {
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

/*console.log(marcin.phoneNumber);
console.log(marcin['customerName']);

janek.orderConfirmation();

var kowalski = {
    customerName: 'Krzysztof Kowalski', //tutaj zawsze przecinek
    phoneNumber: 517547596,
    orderConfirmation: function() {
        console.log( this.customerName + ' właśnie złożyłeś zamówienie');
    }
}

kowalski.orderConfirmation();*/

class Customer {
    constructor(customerName, phoneNumber) {
        this.name = customerName;
        this.phone = phoneNumber;
    }

    orderConfirmation() { /* bez function bo to jest metoda a nie funkcja */
        console.log(this.name + 'właśnie złozył zamówienie');
    }
}

var currentCustomer = new Customer('Jan Rosochacki', 123456789);
console.log(currentCustomer);
console.log(currentCustomer.name);

var currentCustomer = new Customer('Krzysztof Kowalski', 123456789);

console.log(currentCustomer)

class osoba {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    wskaznikBMI() {
        return this.weight / (this.height * this.height);
    }

    bmiMessage() {
        if (this.wskaznikBMI() < 18) {
            console.log('masz niedowagę')
        } else if (this.wskaznikBMI() > 18 && this.wskaznikBMI() < 26) {
            console.log('jest ok')
        } else {
            console.log('masz nadwagę')
        }
    }
}

/* można to zrobić innym sposobem:
function osoba(height, weight) {
this.height = height;
this.weight = weight;
this.liczBMI = function() {
return this.weight/Math.pow(this.heigth, 2);
}
}
*/

var currentBMI = new osoba(1.82, 82);
console.log(currentBMI.wskaznikBMI());

currentBMI.bmiMessage();

var nowaOsoba = new osoba(1.8, 50);

nowaOsoba.bmiMessage();