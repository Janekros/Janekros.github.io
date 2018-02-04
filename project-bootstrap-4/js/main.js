$('a[href*="http"]').click(function(e){ //selektor oznacza, że wybieramy link, który w atrybucie href zawiera ciąg znaków http
    e.preventDefault();
    console.log('test');
    var url = $(this).attr('href'); //pobieramy wartość atrybutu href dla 'klikniętego linka
    console.log(url);
    $('body').fadeOut(5000, function() {
        window.location.href = url; // zamienia nam dla aktualnego okna adres aby wyświetliło stronę, która jest zawarta w klikniętym linku
    });
});