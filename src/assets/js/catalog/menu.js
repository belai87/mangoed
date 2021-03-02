import * as $ from "jquery";

$(document).on('click', '.js-catalog-show', function(){
    $('.menu-floating').toggleClass('active');
    $('body').css({'overflow':'hidden'});
});

$(document).on('click', '.js-catalog-hide', function(){
    $('.menu-floating').toggleClass('active');
    $('body').css({'overflow':'unset'});
});