"use strict";

function first(){

    setTimeout(function(){
        console.log(1);
    }, 1500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, smfnt, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

function myTry(){
    console.log('Влез в функцию');
}

function done(){
    console.log('Я прошел этот урок');
}


learnJS('JavaScript', myTry, done);
myTry();