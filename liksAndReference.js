"use strict";

let a = 5,
    b = a;

b = b + 5; //это работает только с примитивами поэтому 5

console.log(b);
console.log(a);

const obj = { 
    a:5,
    b:1
};

// const copy = obj; // передача по ссылке поэтому 10

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy = {};
        let key;
        for(key in mainObj){
            objCopy[key] = mainObj[key];
        }
        return objCopy;
} 

const numbers = {
    a:2,
    b:5,
    c: {
       x:7, 
       y:4 
    }
};

// const newNumder = copy(numbers); // поверхостная копия объкта

// newNumder.a = 10;
// newNumder.c.x = 10;// обращение к покии по ссылке!

// console.log(newNumder);
// console.log(numbers);

const add = {
    d:17,
    e:20
};

//console.log(Object.assign(numbers, add)); // добавление обьекта к обьекту

const cloneObject = Object.assign({}, add); // добавление обьекта к обьекту

cloneObject.d = 20;

// console.log(add);
// console.log(cloneObject); // клонирование обьекта

const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice(); // копия массива

newArray[1] = 'My'; 
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'redtube'],
      blogs = ['wp', 'lj', 'pornhub'],
      internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c){ // какой капец
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newArray1 = [...array];

console.log(newArray1);

const q = {
    one:1,
    two:2
};

const newObj = {...q};

const newQ = q;

newQ.one = 10;

console.log(q);

