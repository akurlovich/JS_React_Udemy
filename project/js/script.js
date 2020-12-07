/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'), 
          poster = document.querySelector('.promo__bg'),
          ganre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
             
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) { // проверка на пустую строку, если не пустая, выполнются действия
            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        // movieDB.movies.toLowerCase();
        // console.log(movieDB.movies);
        // movieDB.movies.forEach(function(item) {
        //     [item].toLowerCase();
        //     console.log(movieDB.movies[item]);
        //     }
        // );
        // movieDB.movies.sort();

        event.target.reset();

    });
    
    
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });

    };

    deleteAdv(adv); 
    
    
    const makeChanges = () => {
        ganre.textContent = 'драма'; 
        poster.style.backgroundImage = 'url("img/bg.jpg")';

    };
    
    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    };

    sortArr(movieDB.movies);

       
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        
    }

    createMovieList(movieDB.movies, movieList);
    
    // adv.forEach(function(item) {
    //     item.remove();
    // });
    
    // const ganre = document.querySelector('.promo__genre');
    
    // btn.onclick = function() {
    //     console.log(newFilm);
    // };
    
    // btn.addEventListener('click', (event) => { // event событие, можно любое, даже просто e
    //     console.log(event.target);
    //     console.log('Hi');
    // });
    
});

