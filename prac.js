// let person = [];
// person[0] = prompt("ты как урод?", "");
// person[1] = prompt("какой сегодня день?", "");
// person[2] = prompt("у тебя есть тачка?", "");

// document.write(person);



// let int = 10,
//     float = 19.2;

// console.log(int,  float);


// let dsa = false,
//     sda = false;

//  console.log(dsa || sda); 




// Практическое задание 12 партика 




//

// let numberOfFilms = +prompt("сколько фильмов вы посморели?", "");



// const personalMovieDB = {
//     count: numberOfFilms,
//     movie: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// const
//     qw1 = prompt("последний фильм?", ""),
//     qw2 = prompt("На сколько вы его оцените?", ""),
//     qw3 = prompt("последний фильм?", ""),
//     qw4 = prompt("последний фильм?", "");


// personalMovieDB.movie[qw1] = qw2;
// personalMovieDB.movie[qw3] = qw4;


// console.log(personalMovieDB);


// 13 prac


// let number = 100;
// if (number > 100) {
//     console.log("не больше!")

// } else if (number < 50) {
//     console.log("меньше!");
// } else {
//     console.log("OKEY!");
// }


// // Тернарные операторы!
// (number > 200) ? console.log("Не верно!") : console.log("Верно")



// // switch
// let number = 100;
// switch (number) {
//     case 100: console.log("Верно!");
//         break;

//     case 60: console.log("Не верно!");
//         break;

//     default: console.log("Не в этот раз!");
//         break;
// }

// 14 циклы 
// while 

// let num = 1;
// while (num < 1000) {
//     console.log(num);
//     num++;
// }


// // do while 


// do {
//     console.log(num);
//     num++;

// }

// while (num <= 50);

// for (let i = 0; i < 10; i++) {
//     if (i === 6) { // условаие если i будет строго равно 5,остановиться! 
//         //    break;

//         continue; // оператор пропускает шаг который задан в условий и не прерывает 
//     }

//     console.log(i);

// }




// Практика 15






let numberOfFilms = +prompt("сколько фильмов вы посморели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const
        qw1 = prompt("последний фильм?", ""),
        qw2 = prompt("На сколько вы его оцените?", "");
    if (qw1 != null && qw1 != null && qw1.length < 50) {
        console.log("done");
        personalMovieDB.movie[qw1] = qw2;

    }
    else {
        console.log("error");
        i--;
    }
};
if (numberOfFilms < 10) {
    alert("Просмотренно мало фильмов!");

} else if (numberOfFilms <= 30) {
    alert("Вы классической зритель!");

} else if (numberOfFilms > 30) {
    alert("Вы киноман!");
} else {
    alert("Произошла ошибка!");
};


console.log(personalMovieDB);

