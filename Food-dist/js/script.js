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
    










});