document.getElementById('accordion-handler').addEventListener('click', function (e) {

    //console.log(e.target); // wyloguje nagłówek e.target-kliknięty element

    if (e.target.classList.contains('accordion-title')) {

        var getPars = document.querySelectorAll('#accordion-handler p');

        for (var i = 0; i < getPars; i++) {
            getPars[i].classList.remove('visible');
        }

        e.target.nextElementSibling.classList.toggle('visible');

    }
});