"use strict";

// const obj = new Object();//не очень способ

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{
        border:'black',
        background:'red'
    }
};

// console.log(options["colors"]["border"]);

// delete options.name;//удаление свойства

// console.log(options);

for (let key in options){//перебор ключ-значение
     if (typeof(options[key]) === 'object'){
         for (let i in options[key]){ //перебор объекта внутри объекта
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);  
         }
     }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
     }
}



