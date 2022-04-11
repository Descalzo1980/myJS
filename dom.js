"use strict";


const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');

const wrapper = document.querySelector('.wrapper');

const circles = document.getElementsByClassName('circle'); // псевдоколлекции HTML

const hearts = wrapper.querySelectorAll('.heart');// более современный метод // войдет только то что во  wrapper

const oneHeart = wrapper.querySelector('.heart'); // войдет только то что во  wrapper 



// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// btns[0].style.borderRadius = '5px';

// console.log(circles);

box.style.cssText = 'background-color:#555; width: 500px';

// circles.style.backgroundColor = 'red';// так делать ошибка
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'green';
// }

// hearts.forEach(item =>{
//     item.style.background = '#817651';
// });

const div = document.createElement('div');
const text = document.createTextNode('Lorem ipsem');

div.classList.add('black');

document.body.append(div);

wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);

// hearts[2].before(div);
// hearts[2].after(div);


// wrapper.insertBefore(div, hearts[1]);
// wrapper.removeChild(hearts[1]); // old
// circles[0].remove();

hearts[1].replaceWith(circles[1]);
// wrapper.replaceChild(circles[1], hearts[1]);//old

div.innerHTML = "<h1>Lorem ipsen</h1>"; //не очень безопасно

// div.textContent = "Lorem ipsen"; // только текст

div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>'); // перед элементом

div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>'); // в начало элементом
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // в в конце элементом
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>'); // в элементом





