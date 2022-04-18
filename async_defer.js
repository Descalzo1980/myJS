"use strict";

const p = document.querySelectorAll('p');

console.log(p); // defer никогда не блочит страницу + скрипт ждет DOM

/*
Разница между async и defer : атрибут defer 
сохраняет относительную последовательность скриптов,
 а async – нет. Кроме того, defer всегда ждёт, пока весь 
 HTML-документ будет готов, а async – нет.

*/ 

// динамически загружаем скрипт

function loadScript(src){
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script); 
}

loadScript("js/script.js");
loadScript("../MyJS/async_defer.js");