import Chartist from "chartist";

document.addEventListener('DOMContentLoaded', function(){
    let elem = (document.querySelector('.personal-chart') ? document.querySelector('.personal-chart') : '');
    if(elem){
        let max = elem.dataset.max,
            min = elem.dataset.min,
            chart = elem.dataset.class;

            new Chartist.Pie(`.${chart}`, {
                series: [{
                    value: max,
                    name: '',
                    className: 'personal-chart-one'
                },{
                    value: min,
                    name: '',
                    className: 'personal-chart-two'
                }]
            }, {
                donut: true,
                donutWidth: 3,
                donutSolid: true,
                startAngle: 0,
                showLabel: false
            });
        }
});
