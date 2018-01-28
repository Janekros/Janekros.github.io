// podpinanie zdarzenia zaadowania strony ready

//używająć $ - dajemy znać skryptowi, że używamy zasobów jQuery

// $ = jQuery można sie również spotkać z zapisem jQuery(document)... zamiast tego co mamy poniżej

$(document).ready(function () {
    changeColorShowHide();
    changeLinkColor();
    getText();
    setText();
    getHtml();
    setHtml();
    addContentInTagPrepend();
    addElementAfterFirst();
    addElementBeforeFirst();
    delateLastLink();
    deleteContentFromFirstParagraph();
    changeFontSizeAndColor();
    getValueFromInput();
    getValueToInput();
    changeLinkColorInBox();
    boxClick();
    linkMouseover();
    zaniknijPokaz();
});


//obsługa zdarzenia scroll dla okna
$(window).scroll(function () {

});

// dobra praktyka rzy pisaniu js lub jQuery, piszemy zdarzenie i w środku wywołanie funkcji, same funkcje piszemy dalej w kodzie

//fukcja zmienia kolor tła, ukrywa i pokazuje element za pomocą show i hide
function changeColorShowHide() {
    $('#first').css('background-color', 'red').hide(3000).show('slow'); //hide w ms
}

function changeLinkColor() {
    $('.list-item:first-of-type a').css('text-decoration', 'none');
}


//pobiera wartość tekstowa danego selektora
function getText() {
    console.log($('#first h1').text());
}


//ustawia/zmienia wartość tekstowa
function setText() {
    $('#first h1').text('Lorem ipsum dolor sit amet.');
}


//pobiera wartość html danego selektora
function getHtml() {
    console.log($('#first').html());
}

//ustawia/zmienia wartość html
function setHtml() {
    $('#first').html('<span>Lorem ipsum dolor sit amet.</span>');
}

//za pomocą append, prepend, after i before mozna dopisywać również znacznik html

function addContentInTagPrepend() {
    $('#first span').prepend('<span>Element prepend </span>');
}

function addElementAfterFirst() {
    $('#first').after('<div id="third"><h2>Za pomocą metody after</h2></div>')
}

function addElementBeforeFirst() {
    $('#first').before('<div id="fourth"><h2>Za pomocą metody before</h2></div>')
}

function delateLastLink() {
    $('.list-item:last-child a').remove();
}

function deleteContentFromFirstParagraph() {
    $('.list-item:first-of-type').empty();
}


//zmiana kilku wartości css za jednym razem

/*.css({
    wlasciwosc: 'wartość',
    właściwość: 'wartość'
})*/

function changeFontSizeAndColor() {
    $('#main-nav .list-item a').css({
        fontSize: '20px',
        color: 'yellow'
    });
}


function getValueFromInput() {
    console.log($('#formularz form input:first-child').val());
}

function getValueToInput() {
    $('#formularz form input').val('45678');
}


function changeLinkColorInBox() {
    var parent = $('.box');
    parent.each(function () {
        $(this).find('a').css('color', '#fff');
    })
}

function boxClick() {
    var parent = $('.box');
    parent.each(function () {
        $(this).click(function () {
            $(this).css('background-color', 'red');
        });
    });
}


function linkMouseover() {
    var parent = $('.list-item');
    parent.each(function () {
        $(this).on({
            'mouseenter': function () {
                $(this).find('a').css('color', '#000');
            },
            'mouseout': function() {
                $(this).find('a').css('color', 'violet')
            }
        });
    });
}


/*function zaniknijPokaz() {
    $('#each').fadeOut(5000);
    $('#each').fadeIn(2000);
}*/


function zaniknijPokaz() {
    $('#each').slideUp(5000);
    $('#each').slideDown(2000);
}