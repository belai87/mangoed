import * as $ from 'jquery';

$(document).on('click', '.js-auth', function(){
    let formID = $(this).data('modal');
    $('#'+formID).toggleClass('active');
});

$(document).on('click', '.closer', function(){
    let form = $(this).parents('.modal');
    $(form).toggleClass('active');
});