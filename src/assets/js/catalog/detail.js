import Chartist from "chartist";
import * as $ from "jquery";

document.addEventListener('DOMContentLoaded', function(){
    let diagramList = document.querySelectorAll('.chart-item');

    diagramList.forEach(function(elem){
        let max = elem.dataset.max,
            min = elem.dataset.min,
            chart = elem.dataset.class;

        console.log(max, min, chart);

        new Chartist.Pie(`.${chart}`, {
            series: [{
                value: max,
                name: '',
                className: 'chart-one'
            },{
                value: min,
                name: '',
                className: 'chart-two'
            }]
        }, {
            donut: true,
            donutWidth: 3,
            donutSolid: true,
            startAngle: 0,
            showLabel: false
        });
    });
});

$(document).on('click', '.tabs-item', function(){
    let id = $(this).data('content');
    $('.tabs-item').removeClass('active');
    $('.tabs-content_item').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active');
});


$(document).on('click', '.detail-buy', function(){
    $(this).addClass('detail-buy__add');
    $('.detail-buy_text').text('Добавлено');
    $('.detail-icon-add').show(300);
    $('.detail-icon-buy').hide(200);
});

