"use strict";

// посмотрел в консоль, дебаг, многое понравилось

function hello(){
    console.log("Hello world");
    debugger; // нативный брекпоинт
}

hello();

let arr = [1,22,73,4,5,99,"AAA"],
    sorted = arr.sort(compareNumber);

function compareNumber(a, b){
    return a - b;
}

console.log(sorted);

document.getElementById("myH").innerHTML = "JavaScript Comments";
