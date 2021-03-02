import * as $ from "jquery";

$(document).on('click', '.js-product-add', function(){
    let product = $(this).parents('.product');
    $(product).addClass('active');
});

$(document).on('click', '.product-img, .product-name', function(){
    $('#detail-modal').addClass('active');
});