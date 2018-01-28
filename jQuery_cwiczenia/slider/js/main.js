'use strict'

var slideShow = $('.slide-show');

var slideCount = $('.single-slide');

var slideWidth = 100 / slideCount;

var slideIndex = 0;

slideShow.css('width', slideCount * 100 + '%');

slideShow.find('.single-slide').each(function() {
    $(this).css({
    width: slideWidth + '%',
    marginLeft: (slideWidth * index) +  '%'
});
});