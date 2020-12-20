window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            //item.style.display = 'none'; // это инлайн стиль записи. убираем отображение всех табов
            item.classList.add('hide');// форма записи, работа с классами через css
            item.classList.remove('show', 'fade');// форма записи, работа с классами через css
        });

        tabs.forEach(item => { //  убираем класс активности
            item.classList.remove('tabheader__item_active');
        });

    }
    
    function showTabContent(i = 0) { 
        // tabsContent[i].style.display = 'block';// инлайн стиль
        tabsContent[i].classList.add('show', 'fade');//работа с классами css
        tabsContent[i].classList.remove('hide');//работа с классами css
        
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(); // чтоб всегда в начаде был активен первый таб, оставляем пустой, така как автоматом подставить 0, потому что мы указали что i = 0

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {//перебираем все табы и знаем какой нажат
                if (target == item) {// тот элемент в который кликнули будет совбатать с тем который сейчас перебираем
                    hideTabContent();
                    showTabContent(i);// i номер элемента котоырй совпал
                    
                }

            });
        }
    });

    //*-------------------------------добавление таймера------------------------------

    const deadline = '2020-12-20'; // указана дата конца акции

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 *60 *24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
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

    function getZero(num) { // показывать 0 в 07
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
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval); 
            }
        }
    }

    setClock('.timer', deadline); 



    //*-------------------------------модальное окно---------------------------------

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');


    // modalTrigger.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         modal.classList.add('show');
    //         modal.classList.remove('hide');
    //         // modal.classList.toggle('show');// вариант с toggle, нужно быть с ним аккуратно!!!, и точно такая же строчка при закрытии
    //         document.body.style.overflow = 'hidden'; // основная страница не прокруччивается
    //     });
    // });

    function openModal () { //функция на открытие, чтобы можно было использовать в разных местах
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId); // окно не появится, если пользователь сам его открыл
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });  
    
    function closeModal () { //функция на зарытие, чтобы можно было использовать в разных местах
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    // modalCloseBtn.addEventListener('click', () => {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     // modal.classList.toggle('show');
    //     document.body.style.overflow = '';
    // });

    modal.addEventListener('click', (e) => { //закрытие окна при клике на заднюю область
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // document.body.style.overflow = '';
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => { //закрытие при нажание клавиши
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    const modalTimerId = setTimeout(openModal, 50000); //открытие окна через указанное время

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {//проверка, что пользователь долистал до конца страницы
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
    
    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {//проверка, что пользователь долистал до конца страницы
    //         openModal();
    //     }
    //}, {once: true}); // ножно , но нам не подходит
    // });
//*------------------------использование классов для карточе-------------------------

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {//присваеваем по умолчанию
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className)); 
            }

            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
        
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'

    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container',
        'menu__item'

    ).render();

//*----------------отправка данных с формы на сервер---------------------

    const forms = document.querySelectorAll('form'),
          message = {
              loading: 'img/spinner.svg',
              success: 'Спасибо! Скоро с вами свяжемся!',
              failure: 'Что-то пошло не так...'
          };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // очищаем дефолтные события браузера

            const statusMessage = document.createElement('img');
            // statusMessage.classList.add('status');
            statusMessage.src = message.loading;
            // statusMessage.textContent = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage); // чтобы колесико было в низу в нижней форме

            //const request = new XMLHttpRequest();
            //request.open('POST', 'server.php');
            //request.setRequestHeader('Content-type', 'application/json');

            const formData = new FormData(form);

            const object ={};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            // const json = JSON.stringify(object);

            //request.send(json);

            fetch('server.php', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            })
            .then(data => data.text()) //превращаем ответ от сервера в текст
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });

            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         //statusMessage.textContent = message.success;
            //         showThanksModal(message.success);
            //         form.reset();
            //         // setTimeout(() => {
            //         //     statusMessage.remove();
            //         // }, 2000);
            //         statusMessage.remove();
            //     } else {
            //         // statusMessage.textContent = message.failure;
            //         showThanksModal(message.loading);
            //     }
            // });

        });
    }
//*------------------------------оповещение пользователя-------------------------

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
    










});