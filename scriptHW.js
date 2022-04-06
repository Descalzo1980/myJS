"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start:() => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt
            ('Сколько фильмов вы уже посмотрели?', ''); 
        }
    
    },
    rememberMyFilms:() => {
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
    },
    detectPersonalLevel:() => {
        if (personalMovieDB.count < 10){
            console.log("Совсем кино не любишь?");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Довольно много");
        } else if(personalMovieDB.count >= 30){
            console.log("Киноман");
        }else{
            console.log("Я устал");
        }
    },
    showMyDB: (hidden) => {
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB:() => {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres:() => {
        for(let i = 1; i <= 3; i++){
            let gener = prompt(`"Ваш любимый жанр под номером ${i}"`);

            if(gener == '' || gener == null){
                console.log("Вы ввели не корректные данные или их нет ваще");
                i--;
            }else{
                personalMovieDB.genres[i - 1] = gener;
            }  
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


