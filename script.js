'use strict()';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function writeYouGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}
writeYouGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
        alert('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Введено не числовое значение!');
    }
}

detectPersonalLevel();

function rememberMyFilms () {
    for (let i = 1; i < 3; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    } 
}

rememberMyFilms(); 

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB); 
    }
}

showMyDB(personalMovieDB.privat);


