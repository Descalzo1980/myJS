"use strict";

// const btn = document.querySelector('button'),
const btn = document.querySelectorAll('button'), // с ALL получаем псевдомассив
      overlay = document.querySelector('.overlay');

// btn.onclick = function(){ // 
//     alert('Кря');
// };
// btn.onclick = function(){ // замена первого
//     alert('Еще Кря');
// };

// btn.addEventListener('click',() =>{ // можно несколько действий
//         alert('Кря');
// });

// btn.addEventListener('click',() =>{ // можно несколько действий
//         alert('Еще Кря');
// });

// btn.addEventListener('mouseenter',() =>{ // наведение мыши
//         console.log('Еще Кря');
// });


let i = 0;
const deleteElement = (e) =>{
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1){
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// let i2 = 0;
// const insultFunc = (e) =>{
//     console.log("ты кря");
//     // i++;
//     // if (i == 1){
//     //     btn.removeEventListener('click', deleteElement);
//     // }
// };

btn.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

// btn.forEach(btn => {
//     btn.addEventListener('click', insultFunc);
// });


// btn.addEventListener('click', deleteElement); // 05 удОлил кнопку
// overlay.addEventListener('click', deleteElement); // 05 удОлил кнопку



const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Фиг тебе, а не тытруба");
    // console.log(event.target);
});
// btn.removeEventListener('click', deleteElement); // 05 удОлил кнопку

// btn.addEventListener('mouseenter',(e) =>{ // наведение мыши
//     console.log(e.target);
//     e.target.remove();  // удОлил кнопку
//     // console.log('Еще Кря');
// });