'use strict';

// const box = document.getElementById('box');

// console.log(box);  

// const btns = document.getElementsByTagName('button');
// //const btns = document.getElementsByTagName('button')[1]; //сразу передаёт элемент 

// console.log(btns[1]);

// const circles = document.getElementsByClassName('circle'); 
// console.log(circles); // тоже будет коллекция

// const hearts = document.querySelectorAll('.heart'); //тоже будет коллекция, то есть метод forEach

// // console.log(hearts); 

// hearts.forEach(item => {
//     console.log(item);
// });

// // const oneHeart = document.querySelector('.heart'); 
// const oneHeart = document.querySelector('div'); 
// console.log(oneHeart); 

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue'; 
// box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px';
// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});





