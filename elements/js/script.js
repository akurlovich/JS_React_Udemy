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
      wrapper = document.querySelector('.wrapper'),
    //   hearts = document.querySelectorAll('.heart'),
      hearts = wrapper.querySelectorAll('.heart'),
    //   oneHeart = document.querySelector('.heart');
      oneHeart = wrapper.querySelector('.heart');

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

const div = document.createElement('div'); 
// const text = document.createTextNode('Hello world');

div.classList.add('black');
//document.body.append(div); //добавляем наш div в конец элемента body

//document.querySelector('.wrapper').append(div); // в конец элемента с классом wrapper
wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);// в НАЧАЛО элемта

// hearts[1].before(div);
// wrapper.insertBefore(div, hearts[0]);
// hearts[1].after(div);

// circles[1].remove();
// wrapper.removeChild(hearts[1]);
// hearts[0].replaceWith(circles[0]);
// wrapper.removeChild(circles[0], hearts[0]); 

div.innerHTML = '<h1>Hello world</h1>'; //можно текст и можно HTML структуру
// div.textContent = 'Hello'; //только текст

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');









