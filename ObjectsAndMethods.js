"use strict";

// const obj = new Object();//не очень способ

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{
        border:'black',
        background:'red'
    },
    makeTest:function(){
        console.log("Test");
    }
};

options.makeTest();

const {border,background} = options.colors;

document.querySelector('.out-2').innerHTML = `<br>${options.colors}</br>`;

console.log(border,'</br>', background);

console.log(Object.keys(options).length);// массив получаем на выходе

// console.log(options["colors"]["border"]);

// delete options.name;//удаление свойства

// // console.log(options);

// let counter = 0;/*подсчет кол-ва ключ-пара. 
//                     по факту сколько раз прошел цикл по парам.*/

// // for (let key in options){//перебор ключ-значение
// //      if (typeof(options[key]) === 'object'){
// //          for (let i in options[key]){ //перебор объекта внутри объекта
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //             /*counter++;//если убрать здесь по посчитаем 
// //             без вложенности. получим 3 */
// //          }
// //      }else{
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter++;
// //      }
// // }

// console.log(counter);

// for (let key in options){//перебор ключ-значение
//     // if (typeof(options[key]) === 'object'){
//     //     for (let i in options[key]){ //перебор объекта внутри объекта
//     //        console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     //        /*counter++;//если убрать здесь по посчитаем 
//     //        без вложенности. получим 3 */
//     //     }
//     // }else{
//     //    console.log(`Свойство ${key} имеет значение ${options[key]}`);
//        counter++;
//     // }
// }

// console.log(counter); //4 простой перебор

