window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() { //деактивуємо усі таби
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i) { //активуємо таб по індексу
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent(0); // по дефолту перший таб активний

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')) { 
            tabs.forEach((item, i) => { // якщо ми клікаємо на елемент з классом tabheader__item то цей елемент по індексу стає активним, а інші деактивуються
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
              days = Math.floor(t / (1000 * 60 * 60 * 24)),    //загальну кількість ділимо на мілісекунди в добі
              hours = Math.floor(t / (1000 * 60 * 60) % 24),    //отримуємо остачу від ділення доби
              minutes = Math.floor((t / 1000 / 60) % 60),       //отримуємо остачу від ділення години
              seconds = Math.floor((t / 1000) % 60);            //отримуємо остаток від ділення хвилини

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {     // якщо цифра >= 0 і < 10 то ми добавляємо перед нею 0 (07 01 02)
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {            // кожну секунду порівнюємо поточну дату з датою кінця і заносимо дані в поля
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

});
 