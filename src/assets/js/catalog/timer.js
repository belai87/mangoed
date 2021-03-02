document.addEventListener('DOMContentLoaded', function(){

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {

        let clock = document.getElementById(id),
            daysSpan = clock.querySelector('.days'),
            hoursSpan = clock.querySelector('.hours'),
            minutesSpan = clock.querySelector('.minutes'),
            secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        let timeinterval = setInterval(updateClock, 1000);
    }

    let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000), // for endless timer
        countdown = document.querySelector('#countdown'),
        countdown_mobile = document.querySelector('#countdown_mobile'),
        countdown_action = document.querySelector('#countdown_action'),
        countdown_modal = document.querySelector('#countdown_modal');

    if(countdown)
        initializeClock('countdown', deadline);

    if(countdown_mobile)
        initializeClock('countdown_mobile', deadline);

    if(countdown_action)
        initializeClock('countdown_action', deadline);

    if(countdown_modal)
        initializeClock('countdown_modal', deadline);

});

