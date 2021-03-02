import * as $ from "jquery";

$(document).on('click', '.header-menu, .header-mobile-menu', function(){
    $(this).toggleClass('active');
    $('.personal-menu').toggleClass('active');

    if(window.innerWidth < 992)
        $('body').css({'overflow':'hidden'});
});

$(document).on('click', '.js-personal-hide', function(){
    $(this).toggleClass('active');
    $('.personal-menu').toggleClass('active');

    if(window.innerWidth < 992)
        $('body').css({'overflow':'unset'});
});

