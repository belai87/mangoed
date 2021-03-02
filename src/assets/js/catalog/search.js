import * as $ from "jquery";

$(document).on('click', '.header-mobile-search', function(){
    $('.main').toggleClass('down');
    $('.mobile-search').toggleClass('active')
});