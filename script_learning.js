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

// const arr = [1, 13, 2, 16, 28];
// arr.sort(compareNum); 
// console.log(arr); 

// function compareNum(a, b) {
//     return a-b;
// }
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

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(a);
// console.log(b);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //в copy кладется ссылка на obj
// copy.a = 10;
// console.log(copy);
// // console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// // console.log(newNumbers);
// // console.log(numbers); 

// const add = {
//     d: 17,
//     e: 20
// };

// // console.log(Object.assign(numbers, add));
// // const clone = Object.assign({}, add);
// // clone.d = 20;
// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asf';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);

// const array = ['a', 'b'];
// const newAarray = [...array];
// const q = {
    //     one: 1,
    //     two: 2
    // };
    
// const newObj = {...q};

// ---------------------           ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ

// To string

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// console.log(typeof(5 + ''));

// const num = 5;
// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// // To number

// console.log(typeof(Number('4')));
// console.log(typeof(+'4'));
// console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt("Hello", "");

// // To boolean

// // 0, '', null, underfined, NaN;
// let switcher = null;
// if (switcher) {
//     console.log('Working...');
// }
// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// console.log(typeof(Boolean('4')));

// console.log(typeof(!!'4'));

// -------------------------РАЗБОР ЗАДАЧ----------------------
// let x = 5;
// alert(x++); // 5 так как ++ после переменной

// [] + false // будет false и тип String
// [] + false - null //будет NaN
// [] + false - null + true //тоже NaN

// let y = 1;
// let x = y = 2;
// alert(x); // 2

// [] + 1 + 2;// '12' тип String

// alert('1'[0]); // 1 так как [0] обращение к индексу строки

// 2 && 1 && null && 0 && undefined // И запинается на лжи ИЛИ на правде, будет null

// console.log(!!(1 && 2) === (1 && 2)); // false 

// alert(null || 2 && 3 || 4); // && логическое И выше, 3

// const a = [1, 2, 3]; 
//       b = [1, 2, 3]; // a != b так как это разные хранилища информации

// alert(+'Infinity'); // Infinity

// console.log("Ëжик" > "яблоко"); // false

// console.log(0 || "" || 2 || undefined || true || false); // 2



//-----------------------------СОБЫТИЯ-------------------------------

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

// btn.addEventListener('mouseenter', () => { // наведение мышки
//     alert('Hi');
// });

// let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    // console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
        
    // }
};

// btn.addEventListener('click', (event) => { // event событие, можно любое, даже просто e
    // console.log(event.target);
    // event.target.remove();
    // console.log('Hi');
// });

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});// once будет срабатывать только 1 раз
});


const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});


















