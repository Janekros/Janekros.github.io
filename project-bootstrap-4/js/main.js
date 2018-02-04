$('a[href*="http"]').click(function(e){ //selektor oznacza, że wybieramy link, który w atrybucie href zawiera ciąg znaków http
    e.preventDefault();
    
    var url = $(this).attr('href'); //pobieramy wartość atrybutu href dla 'klikniętego linka
    
    $('body').fadeOut(5000, function() {
        window.location.href = url; // zamienia nam dla aktualnego okna adres aby wyświetliło stronę, która jest zawarta w klikniętym linku
    });
});

$(window).scroll(function() {
   console.log($(this).scrollTop()); //sprawdza jak daleko od góry stronu 'odscrollowaliśmy'
    
    if($(this).scrollTop()>70) {
        $('.navbar').addClass('scroll');
    } else {
        $('.navbar').removeClass('scroll');
    }
});

$(window).scroll(function() {
   var progressBarWidth = ($(this).scrollTop() * 100)/($('body').height() - $(window).height());
    console.log(progressBarWidth);
    
});