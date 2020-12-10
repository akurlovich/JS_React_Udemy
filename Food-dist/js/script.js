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

    //*-------------------------------модальное окно-----------

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close');


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

    modalCloseBtn.addEventListener('click', closeModal);
    
    // modalCloseBtn.addEventListener('click', () => {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     // modal.classList.toggle('show');
    //     document.body.style.overflow = '';
    // });

    modal.addEventListener('click', (e) => { //закрытие окна при клике на заднюю область
        if (e.target === modal) {
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
    
    const modalTimerId = setTimeout(openModal, 3000); //открытие окна через указанное время

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

    










});