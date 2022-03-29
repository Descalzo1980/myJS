"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');
    //   c = prompt('Любимый актер?', ''),
    //   d = prompt('Сколько ему лет?', '');
    //   c = prompt('Один из последних просмотренных фильмов?', ''),
    //   d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// personalMovieDB.actors[c] = d;

// personalMovieDB.movies[c] = d;

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', ''); 
        
        if (a != null && b != null && a !='' && b !='' && a.length < 10){
            personalMovieDB.movies[a] = b;
            console.log("Ура?");
        }
        else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Совсем кино не любишь?");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Довольно много");
    } else if(personalMovieDB.count >= 30){
        console.log("Киноман");
    }else{
        console.log("Я устал");
    }
}

// detectPersonalLevel();

// if (numberOfFilms.isEmpty){
//     console.log("Напиши про фильмы");
// }else{
//     console.log("Пока всё нормально");
// }

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`"Ваш любимый жанр под номером ${i}"`);
    }
}

writeYourGenres();

console.log(personalMovieDB);
