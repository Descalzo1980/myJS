"use strict";

function sum (a, b){
    return a + b;
}

function multi(a,b){
    return a * b;
}

let a = sum(4,5);
console.log(a);

document.querySelector('.b-1').addEventListener('click', function(){
    let res = sum(23,45);
    console.log(res);
});

// the same
document.querySelector('.b-1').addEventListener('click', () => {
    let res = sum(23,45);
    console.log(res);
});

// запуск двух функций

document.querySelector('.b-2').addEventListener('click', function(){
    let res = sum(23,45);
    console.log(res);
    let res2 = multi(23,45);
    console.log(res2);
});

document.querySelector('.b-2').addEventListener('click', () => {
    let res = sum(23,45);
    console.log(res);
    let res2 = multi(23,45);
    console.log(res2);
});

// callback

const arr1 = [4,5,6,7,8];

function pow2(any){
    return any ** 2;
}

const res2 = arr1.map(pow2); // map перебирает каждый элемент и применяет функцию

console.log(res2);

const res3 = arr1.map(function(a){
    return a**2;
});
console.log(res3);

const res4 = arr1.map((a) => {
    return a**2;
});
console.log(res4);

// short write
// одна строка убрать {}

// один аргумент можно () убрать
const res5 = arr1.map(a => a**2);
console.log(res5 + '5');


// метод фильтер

const res6 = arr1.filter(function(item,index){
    if(index %2 === 0 ){
        return true;
    }
});

console.log(res6);

// пишем стрелками

const res7 = arr1.filter((item,index) => (index %2 ===0));

console.log(res7);

// arrow & this

document.querySelector('.b-3').addEventListener('click', function(){
    console.log(this);
});

document.querySelector('.b-3').addEventListener('click',() => {
    console.log(this);
});

// arrow агрументы

const f1 = (...arg) => {
    console.log(arg);
    console.log('work');
}; 

f1(99,100);