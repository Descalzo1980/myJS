"use strict";

// let num = 20;//глобальная

// function showFirstMassage(text){
//     console.log(text);
//     //let num = 10; //локальная, выводит 10,c let 20
//     console.log(num);
// }

// showFirstMassage("Hello world");
// console.log(num);

// // function calc(a,b){
// //     return (a + b);
// // }

// // console.log(calc(4,3));
// // console.log(calc(11,7));
// // console.log(calc(11,-5));

// function ret(){ //создается до начала выполнения скрипта
//     let num = 50;
//     //let myString = "Hello World";
//     return num;
//     //return myString;
// }

// const anotherNum = ret();

// console.log(anotherNum);

// //logger();// выдает ошибку
// const logger = function(){ //создается только тогда, когда доходит поток
//     console.log("Hello");
// };
// logger();

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// function testFunction(){
//     const x = 5;
//     const y = 10;
//     console.log(x + y);
// }

// function hello(){
//     testFunction();//вызов внутри функции функции
//     console.log('Hello');
// }

// function testFunction2(){
//     function test3(){
//         console.log('test3');
//     }
//     test3();
//     console.log('test function 2');
// }

// // testFunction();
// hello();
// testFunction2();
// // test3();error

// function unixTime(){
//     let time = Math.floor(new Date().getTime());
//     console.log(time);
// }

// unixTime();
// // unixTime();
// // unixTime();
// // unixTime();

// function randomInt(){
//     const min = 100;
//     const max = 300;
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     console.log(rand);

// }
// randomInt();
// randomInt();

// function randomInt(){
//     console.log('random int 555');//кто последний тот и вызывается
// }

// randomInt();
// randomInt();
// randomInt();
//console.log(randomInt);//вывод листинга
// rand() до определения функции если нет переменных выйдет ошибка
// let min = +prompt('Ведите число');
// let max = +prompt('Ведите число');
// let min = 1000;
// let max = 5000;

// function rand(){
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     console.log(rand);
// }
// rand();

// min = 5;
// max = 15;
// rand();

// function count(){ // всё время будет 10
//     let c = 9;
//     c++;
//     console.log(c);
// }

// count();//10
// count();//10
// count();//10
// count();//10

let c = 9;

function count(){
    c++;
    console.log(c);
}

count();
// count();
// count();
// count();

document.querySelector('.out-1').onclick = count;

// document.querySelector('.out-1').addEventListener('mousemove', count); // олень, дважды подключил скрипт

document.querySelector('.out-1').addEventListener('mousemove', blockWidth);

let w = 100; //если так то блок растет
function blockWidth(){
    //let w = 100;// так переменная обнуляется и блок не растет
    w++;
    document.querySelector('.out-1').style.width = w + 'px';
}

document.querySelector('.out-1').addEventListener('mousemove', blockWidth);

let x = 10, y = 15;
let res = x + y;

function showSum (x, y){
    console.log(res);
}

showSum();
// let res = showSum(10,15,'.out-1');//выводим данные в блок
// console.log(res);

function showSomeAll(){
    console.log(arguments);
    // let sum = 0;
    // for(let i = 0; i < arguments.length; i++){
    //     sum +=arguments[i];
    // }
    let sum = Array.from(arguments).reduce( (accum,item) => accum += item);
    console.log(sum);
}

showSomeAll(4,5,6);

function showSomeAll2(...args){
    console.log(args);
    // let sum = 0;
    // for(let i = 0; i < arguments.length; i++){
    //     sum +=arguments[i];
    // }
    let sum = args.reduce( (accum,item) => accum += item);
    console.log(sum);
}

showSomeAll(4,5,6,7);


//функция как аргумент

function showAll(res){
    document.querySelector('.out-1').innerHTML = `<br>${res}</br>`;
}

function showSomeAll3(drawFunction,...num){
    drawFunction(num);
}

showSomeAll3(showAll,55,56,45,5555555);

