"use strict";

const arr =[10, 222, 83, 6, 8];

arr.sort(compareNum);

console.log(arr);

function compareNum(a, b){
    return a - b;
}

// arr[99] = 0;

// console.log(arr.length); // 5! +1
// console.log(arr); // 94 пустых элементов

// arr.forEach(function(item, number, arr){ // это использую везде 
//     console.log(`${number}: ${item}: внутри массива ${arr}`);
// });

// const newArr = arr.map(myFuintion);

// function myFuintion(num){
//     return num * 10;
// }
// console.log(newArr);

// arr.pop(); //удаляет последний элемент массива
// arr.push(10);//добавляет элемент
// console.log(arr);

// for (let i = 0; i < arr.length; i++){ //перебор массива
//     console.log(arr[i]);
// }

/* for (let value of arr){ перебор массива, 
здесь можно использовать break и continue
console.log(value);
 }*/


// const str = prompt("", "");

// const products = str.split(", "); // получаем массив на основании строк

// products.sort();

// console.log(products.join('; '));

