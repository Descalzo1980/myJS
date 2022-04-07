"use strict";

// динамическая типизация
// 1
console.log(typeof(String(null))); //string
console.log(typeof(String(4))); //string

// 2

console.log(typeof(5 + '')); //string пр сложении со строкой строка получается

const num = 5;

console.log("https://yandex.ru/food" + num); //https://yandex.ru/food5

const fontSize = 26 + 'px'; //вариант испоьлзования д.т в css

//1 Number

console.log(typeof(Number('4'))); //Numberconsole.log(typeof(Number('4'))); //Number


console.log(typeof(parseInt("15px, 10"))); 


let answer = +prompt("Hello?", "");


// boolean

//0, '', null, undefined,NaN; // false всегда

let switcher = null;

if(switcher){
    console.log('Working...'); // ничего
}

switcher = 1;

if(switcher){
    console.log('Working...'); // 1 то есть тру
}

console.log(typeof(Boolean('4'))); //boolean

console.log(typeof(!!'4')); //boolean



