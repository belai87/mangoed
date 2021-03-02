import * as $ from "jquery";

$(document).on('click', '.js-payment', function(){
    $('.js-payment.active').removeClass('active');
    $(this).toggleClass('active');
});

$(document).ready(function(){
   let today = new Date(),
       position = '',
       myDatepicker = $('.datepicker-here').datepicker().data('datepicker');

    today.setDate(today.getDate() + 1);
    if($(window).innerWidth() < 767){
        position = 'top center';
    }else{
        position = 'right top';
    }

    $('.datepicker-here').datepicker({
        position: position,
        minDate: today,
        onSelect: function(){
            myDatepicker.hide();
        }
    });
});