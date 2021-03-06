'use strict()';

// let numbersOfFilms;

const personalMovieDB = {
    count: 0, 
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    writeYouGenres: function() {
        // for (let i = 0; i < 3; i++) {
        //     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
        //     while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
        //     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
        //     }
        // }
       
        let genres = prompt('Введите Ваши любимые жанры через запятую');

        if (genres === '' || genres == null) {
            i--;
        } else {
            personalMovieDB.genres = genres.split(', ');
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} это ${item}`);
        });

    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            alert('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель!');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман!');
        } else {
            alert('Введено не числовое значение!');
        }
    },
    rememberMyFilms: function() {
        for (let i = 1; i < 3; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        } 
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB); 
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
            console.log(personalMovieDB.privat);
        } else {
            personalMovieDB.privat = true;
            console.log(personalMovieDB.privat);
        }
    }

};

// personalMovieDB.writeYouGenres();
// console.log(personalMovieDB); 

// function toggleVisibleMyDB() {
//     if (personalMovieDB.privat == false) {
//         personalMovieDB.privat = true;
//         console.log(personalMovieDB.privat);
//     } else {
//         personalMovieDB.privat = false;
//         console.log(personalMovieDB.privat);
//     }
// }


// function start() {
//     personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
//     while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//         personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
//     }
// }

// start();

// function writeYouGenres() {
//     for (let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
//     }
// }
// writeYouGenres();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
//         alert('Просмотрено довольно мало фильмов!');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert('Вы классический зритель!');
//     } else if (personalMovieDB.count >= 30) {
//         alert('Вы киноман!');
//     } else {
//         alert('Введено не числовое значение!');
//     }
// }

// detectPersonalLevel();

// function rememberMyFilms () {
//     for (let i = 1; i < 3; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//         } else {
//             i--;
//         }
//     } 
// }

// rememberMyFilms(); 

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB); 
//     }
// }

// showMyDB(personalMovieDB.privat);
