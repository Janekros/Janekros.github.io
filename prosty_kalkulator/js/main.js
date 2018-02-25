var buttons = document.querySelectorAll('#calculator button');

console.log(buttons);

/*buttons[0].addEventListener('click', function() {
    console.log(this.innerText);
}) // możemy tak zrobić ale musielibyśmy dla każdego przycisku robić oddzielnie - dużo kodu bez sensu

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        console.log(this.innerText);
    });
}*/ // możliwa opcja

document.getElementById('calculator').addEventListener('click', function(event) {
    console.log(event.target.innerText);
});

