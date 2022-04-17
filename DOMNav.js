"use strict";

// // console.log(document.body); // обращение к body
// // console.log(document.documentElement); // обращение к html
// console.log(document.body.childNodes); // обращение к ноду
// // console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// // console.log(document.body.lastChild);

// // console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);



// // console.log(document.querySelector('[data-current="3"]').nextSibling);//получаем перенос строки, то есть то, что есть в HTML
// // console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}




