'use strict()';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms, 
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

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


// console.log(personalMovieDB); 
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
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
// function showFirstMessage (text) {
//     console.log(text);
// }
// showFirstMessage('Hello World!'); 

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// const {border, bg} = options.colors; 
// console.log(border);


// options.makeTest(); 

// console.log(Object.keys(options).length); 
// console.log(options.name);

// delete options.name;

// console.log(options["colors"]["border"]); 
// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter); 

const arr = [1, 13, 2, 16, 28];
arr.sort(compareNum); 
console.log(arr); 

function compareNum(a, b) {
    return a-b;
}
// arr.pop();
// arr.push(10); 
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// }
// );

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort(); 
// console.log(products.join('; ')); 


