$(document).ready(function(){
    addScrolledClass();
});


$(document).scroll(function(){
    addScrolledClass();
});



/*function menuScroll(){
    var menuHeight = 0;
    var aps = 0;
        
    
    if(aps>=menuHeight) {
        $('#main-nav').css({
            height: '100px',
            backgroundColor: '0,0,0,0.6' 
        })
    }
}*/

function addScrolledClass() {
    var navHeight = $('#main-nav').outerHeight();
    var actualPos = $(window).scrollTop();
    
    if(actualPos >= navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}