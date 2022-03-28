"use strict";

let num = 20;//глобальная

function showFirstMassage(text){
    console.log(text);
    num = 10; //локальная, выводит 10
}

showFirstMassage("Hello world");
console.log(num);