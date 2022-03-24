"use strict";

// alert('Буду проституткой!');


// const result = confirm('Будешь проституткой?');

// console.log(result);

// const answer = +prompt("Вам есть 18 лет?", "18");

// console.log(answer + 5);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Stas";

// alert(`Привет, ${user}`);

// answers[0] = prompt('Имя?', '');
// answers[1] = prompt('Возраст?', '');
// answers[2] = prompt('Кря?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// console.log('5' + " - object");
// console.log(5 + "4");

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;
// console.log(incr++);
// console.log(incr);
// // console.log(decr--);

// let a = 8;

// console.log(typeof(a));

// console.log(2 + 2 * 2 !== 8);

// const isChecked = false,
//       isClose = false;
      
// console.log(isChecked || !isClose);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



