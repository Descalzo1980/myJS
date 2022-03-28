"use strict";

const str = "teSt";
const arr = [1, 2, 3];

console.log(str.length);
console.log(str[2]);//s
console.log(str.toUpperCase());
console.log(str.toLowerCase().slice(0,3));//tes
console.log(arr.length);//свойство одно, методов дофига
console.log(str.slice(0,3));//teS

let fruit = "Some fruit";

console.log(fruit.indexOf("t")); //9

const logger = "Hello world";

console.log(logger.slice(0,2));//режет по второй символ, не включает его
console.log(logger.slice(2));//режет со второго 

console.log(logger.substring(1, 5)); // не принимает отрицательных значений

console.log(logger.substr(1, 5)); //сколько вырезать

const num = 12.2;

console.log(Math.round(num));

const test = "12.2px";


console.log(parseInt(test));// превращаем в другой тип

const test1 = 12;
console.log(parseFloat(test1));// с точкой



