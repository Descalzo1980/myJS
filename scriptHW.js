"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

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


if (personalMovieDB.count < 10){
    console.log("Совсем кино не любишь?");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Довольно много");
} else if(personalMovieDB.count >= 30){
    console.log("Киноман");
}else{
    console.log("Я устал");
}

// if (numberOfFilms.isEmpty){
//     console.log("Напиши про фильмы");
// }else{
//     console.log("Пока всё нормально");
// }

console.log(personalMovieDB);
