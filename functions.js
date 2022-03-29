"use strict";

let num = 20;//глобальная

function showFirstMassage(text){
    console.log(text);
    //let num = 10; //локальная, выводит 10,c let 20
    console.log(num);
}

showFirstMassage("Hello world");
console.log(num);

// function calc(a,b){
//     return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(11,7));
// console.log(calc(11,-5));

function ret(){ //создается до начала выполнения скрипта
    let num = 50;
    //let myString = "Hello World";
    return num;
    //return myString;
}

const anotherNum = ret();

console.log(anotherNum);

//logger();// выдает ошибку
const logger = function(){ //создается только тогда, когда доходит поток
    console.log("Hello");
};
logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};