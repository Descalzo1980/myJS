"use strict";

let str = "some"; // примитив
let strObj = new String(str); // объект

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health:400,
    armor:100,
    sayHello: function(){
        console.log("Hello");
    }
};

// const Jonh = {
//     health:100
// };

const Jonh = Object.create(soldier); // создание прототипа


// Jonh.__proto__ = soldier;//old school

//Object.setPrototypeOf(Jonh, soldier); // the same Jonh.__proto__ = soldier



// console.log(Jonh.sayHello);

Jonh.sayHello(); 