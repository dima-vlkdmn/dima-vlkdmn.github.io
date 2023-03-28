window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    // Timer

    const deadLine = '2023-05-20';
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 * 60) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds');

              timeInterval = setInterval(updateClock, 1000);
              updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero( t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);

    // Slider
    // const sliderLine = document.querySelector('.slider-line'),
    //   prevButton = document.querySelector('.button-prev'),
    //   nextButton = document.querySelector('.button-next')
    //   dots = document.querySelectorAll('.dot')

    // let position = 0,
    //     dotIndex = 0

    // const nextSlide = () => {
    //     if (position < ((dots.length-1) * 600)) {
    //         position += 600
    //         dotIndex++
            
    //     } else {
    //         position = 0
    //         dotIndex = 0
    //     }
    //     sliderLine.style.left = -position + 'px'
    //     thisSlide(dotIndex)
    // }

    // const prevSlide = () => {
    //     if (position > 0) {
    //         position -= 600
    //         dotIndex--
    //     } else {
    //         position = (dots.length - 1) * 600
    //         dotIndex = (dots.length - 1)
    //     }
    //     sliderLine.style.left = -position + 'px'
    //     thisSlide(dotIndex)
    // }

    // const thisSlide = (index) => {
    //     for (let dot of dots) {
    //         dot.classList.remove('active')
    //     }
    //     dots[index].classList.add('active')
    // }

    // nextButton.addEventListener('click', nextSlide)
    // prevButton.addEventListener('click', nextSlide)

    // dots.forEach( (dot, index) => {
    //     dot.addEventListener('click', () => {
    //         position = 600 * index
    //         sliderLine.style.left = -position + 'px'
    //         dotIndex = index
    //         thisSlide(dotIndex)
    //     })
    // }) 

    // setInterval ( () => {
    //     nextSlide()
    // }, 3000)

});
 