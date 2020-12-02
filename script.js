'use strict';
// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms, 
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
//     alert('Просмотрено довольно мало фильмов!');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель!');
// } else if (personalMovieDB.count >= 30) {
//     alert('Вы киноман!');
// } else {
//     alert('Введено не числовое значение!');
// }

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 1; i < 3; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// } 

// console.log(personalMovieDB); 

// if (9 == 9 || 7 == 7) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }
// (num >= 50) ? console.log("Ok!") : console.log('Error'); 

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);
// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);

// }
function showFirstMessage (text) {
    console.log(text);
}
showFirstMessage('Hello World!'); 