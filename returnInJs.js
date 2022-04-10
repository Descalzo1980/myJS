"use strict";

// let sum = 0;
function f1(x, y) { // процедура
    // let sum = x + y;
    // console.log(x+y);
    return x + y;
}
f1(4, 45);
// console.log(sum);

// function f1(x , y) { // уже получше
//     console.log(x+y);
// }
// f1(4,5);


// function f2(){
//     console.log(2);
//     return 5; // вернет 5
// }
// f2();
// console.log(5 + f2());
console.log(11 + 3 + 5 + f1(4,5)); // 28
console.log(f1(11, 3) + 5 + f1(4,5)); // 28

function randInt(min,max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let r = randInt(222,333);
console.log(r);
console.log(randInt(222,333) + 100);


// вывод куда угодно

console.log(f1(100,200));

document.querySelector('.out-1').textContent = f1(300,400);
document.querySelector('.out-1').style.background = 'rgb(23,156,201)';
document.querySelector('.out-1').style.background = `rgb(${randInt(0,255)},
${randInt(0, 255)},${randInt(0,255)})`;// диско на корабле)))
// alert(f1(3,4));
// использовать в выражениях
console.log(100 * f1(3,4));

// вывод данных от пользователя

document.querySelector('.b-3').addEventListener('click',
function(){
    const str = document.querySelector('.i-3').value;
    document.querySelector('.out-3').innerHTML = 'Hello' + 
    clearText(str);
    console.log('Hello ' + clearText(str));
});

function clearText(data){ // чистим от пробелов и приводим к нижнему регистру
    return data.trim().toLowerCase();
}

function t4(){
    console.log(1);
    return;// прерывание функции
    console.log(2);
    console.log(3);
}

t4();

// прерывание функции

function indexOfEmul(arr,num){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}

let result = indexOfEmul([11,22,33,44], 44);// 3
console.log(result);

// Пользователь вводит количетсво лет

document.querySelector('.b-4').addEventListener('click',
function(){
    let year = +document.querySelector('.i-4').value;
    if(isNaN(year)) {
        alert('Введи число');
        return;
    } else if (year <=0 || year > 150 ){
        alert('Опять не так');
        return;
    }
    document.querySelector('.out-4').innerHTML = 2022 - year;
});

// Сумма

console.group('newEx'); // пример а ля осовы рекурсии, пока хз что такое
const arr5 = [[1, 2, 3],[6,7,18]];
function summ5(){
    let s = 0;
    for (let i = 0; i < arr5.length; i++) {
        s += sum(arr5[i]);
    }
    return(s);
}
function sum(arr){ // стр. 143!
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum;
}

console.log(summ5());
console.groupEnd();


// Return ;
console.group('newEx1'); 
function t6(){
    let a = 88;
    return a;
    /*
    return 
    a; // return не любит переноса!, цаца какая)
    */
}

console.log(t6());
console.groupEnd();

// Return ;
console.group('newEx2'); 
const arr7 = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[11, 22, 33]];

const newArr7 = arr7.filter(item =>{ // стрелочная функция
    return (sum(item) % 2 === 0 ); //выводим по модулю только те массивы что в сумме четные
});

console.log(newArr7);
console.groupEnd();


// exper return function

function t8(){
    return sum;
}

let s = t8();

console.log(s([10,20,30])); //60 