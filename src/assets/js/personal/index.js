import * as $ from "jquery";

$(document).on('click', '.personal-more', function(){
    $('.personal-info_item').toggleClass('active');
    $(this).toggleClass('active');
});

$(document).on('click', '.radio-address', function(){
    $('.radio-address').removeClass('active');
    $(this).addClass('active');
});