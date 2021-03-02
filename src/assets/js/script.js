import * as $ from 'jquery';

$(document).ready(function(){
    let owl = $('.slider'),
        owlAction = $('.action-slider');
    owl.owlCarousel({
        loop: false,
        items: 1,
        margin: 10,
        nav: false,
        onInitialized: function() {
            $('.slider-control_counter').text('1 / ' + this.items().length)
        },
        responsive:{
            480:{
                dots:true
            }
        }
    });
    owl.on('changed.owl.carousel', function(event) {
        $('.slider-control_counter').text(event.item.index + 1 + ' / ' + event.item.count)
    });
    $('.slider-control_next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.slider-control_prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    owlAction.owlCarousel({
        loop: true,
        items: 5,
        margin: 10,
        nav: false,
        responsive:{
            0:{
                items:1,
                center:true,
                loop: true,
                stagePadding: 40
            },
            720:{
                items:2
            },
            1200:{
                items:4
            },
            1440:{
                items:5
            }
        }
    });
});

$(document).on('click', '.footer-menu_item__title', function(){
    if(window.innerWidth < 992){
        $(this).toggleClass('active');
    }
    $(this).siblings().toggleClass('active')
});
$(document).on('click', '.closer', function(){
    $(this).parents('.window').removeClass('active');
});
$(document).on('click', '.product-control_unit', function(){
    let val = $(this).siblings().val(); // махинации чтобы курсор был в конце строки при focus
    $(this).siblings().val('');
    $(this).siblings().focus().val(val);
});






