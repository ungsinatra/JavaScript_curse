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






// let numberOfFilms = +prompt("сколько фильмов вы посморели?", "");


// const personalMovieDB = {
//     count: numberOfFilms,
//     movie: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const
//         qw1 = prompt("последний фильм?", ""),
//         qw2 = prompt("На сколько вы его оцените?", "");
//     if (qw1 != null && qw1 != null && qw1.length < 50) {
//         console.log("done");
//         personalMovieDB.movie[qw1] = qw2;

//     }
//     else {
//         console.log("error");
//         i--;
//     }
// };
// if (numberOfFilms < 10) {
//     alert("Просмотренно мало фильмов!");

// } else if (numberOfFilms <= 30) {
//     alert("Вы классической зритель!");

// } else if (numberOfFilms > 30) {
//     alert("Вы киноман!");
// } else {
//     alert("Произошла ошибка!");
// };


// console.log(personalMovieDB);

// 16 практика ФУНКЦИЙ!! 
//Функция - это именованный блок кода, который вызывается в нужных местах программы по имени 
//Другими словами, функция представляет собой подпрограмму, которую можно вызвать из основной программы, причем неоднократно 



// function showFirstMessage (text){  /// FUNCTION DECLARATION
//     console.log(text);             // создаеться до начало выоленнеи скрипта!
// }
// showFirstMessage("hello world!");




// let goo = function(int){
//     console.log("sadasdasd"); // FUCNCTION EXPRESSION
//                               // создается только тогада когда скрипт дохолид до него !

// }
// goo();




// const free = (a, b) => { return a+b}; // стрелочные функций !!!
// Не имеет своего контекста!(THIS)



//  17 prac Методы и свойства 

// let all = "dog";
// console.log(all.toUpperCase());  // метод touPerCase -меняет регистр


// console.log(all.indexOf("d")); // метод выводит с значение у буквы D, если нет, то -1 по деффолту 

// console.log(all.slice(0, 3)); // метод выводит значение задонной в скобках

// console.log(all.substr(0, 3)); // метод в котором нужно указать второй аргумент как конец вырезки (0- началао,  2 - столько симфолов будет обрезаться!)



// // Работа с числами! Методы с чилсами !

// let cel = 14.1;
// console.log(Math.round(cel)); // метод для округление числа 
// let test = "13.1px";
// console.log(parseInt(test)); // метод который перевод число в другую систему исчисление (ответ : 12- число, а не строка!)

// console.log(parseFloat(test)); //  метод который перевод число в друбную систему исчисление!(ответ: 13.1px)



// 18 prac prac





// Практика 15






// let numberOfFilms;
// function start() {

//     numberOfFilms = +prompt("сколько фильмов вы посморели?", "");
//     while (nuOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("сколько фильмов вы посморели?", "");
//     }

// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movie: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function filmsWatch() {
//     for (let i = 0; i < 2; i++) {
//         const
//             qw1 = prompt("последний фильм?", ""),
//             qw2 = prompt("На сколько вы его оцените?", "");
//         if (qw1 != null && qw1 != null && qw1.length < 50) {
//             console.log("done");
//             personalMovieDB.movie[qw1] = qw2;

//         }
//         else {
//             console.log("error");
//             i--;
//         }
//     }

// }
// filmsWatch();


// function personLevel() {
//     if (numberOfFilms < 10) {
//         alert("Просмотренно мало фильмов!");

//     } else if (numberOfFilms <= 30) {
//         alert("Вы классической зритель!");

//     } else if (numberOfFilms > 30) {
//         alert("Вы киноман!");
//     } else {
//         alert("Произошла ошибка!");
//     }
// }
// personLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }



// }
// showMyDB(personalMovieDB.privat);



// function writeYourGeners() {

//     let quation;
//     let aws;
//     for (let i = 1; i <= 3; i++) {
//         quation = prompt(`Ваш любимый жанр? ${i}`);

//         personalMovieDB.genres[i - 1] = quation;
//         console.log(personalMovieDB);
//     }


// }

// writeYourGeners();

// console.log(personalMovieDB);






// Повторение !! всего что было 
//   условий!! тернарные операнды 


// let qwua = "are u human?";

// if (5 > 10) {
//     console.log(" u are human!")


// } else if (5 > 60) {
//     console.log(" u are not human!sry");


// } else if (5 > 3) {
//     console.log(" u are animal!");
// }


// let message = (5 > 10) ? "dss" : (5 < 6) ? "yes! alright!" : "no!!!!!!!!!!"; // тернареное условие ! 
// console.log(message);
// qwua += message;




// let tru = (1 === "1") ? "true" : "false";
// console.log(tru);


//  (5=="5")? console.log("true"):console.log("false"); /// true потому что при сравнений страка cтоновиться числом и в итоге получаеться 5=5 true; 



// let mes = (94 > "11" && 58<100)? console.log("true!"):console.log("fasle!");




// let arr = [10, 20, 40, 60];
// for (let i = 0; i < 5; i++) {
//     if (arr[i] % 2 == 0) {
//         arr[i] = arr[i] ** 2;

//     }
// }

// console.log(arr[0]);



// let arr1 = [1, 2, 3, 4];

// for (let i = 0; i < 4; i++) {
//     if (arr1[i] == 1) {
//         console.log("0001");
//     } else if (arr1[i] == 2) {
//         console.log("0010");

//     } else if (arr1[i] == 3) {
//         console.log("0011");


//     } else if (arr1[i] == 4) {

//         console.log("0100");
//     }


// }








// let res;
// let numberOfFilms;
// function start() {

//     numberOfFilms = +prompt("сколько фильмов вы посморели?", "");
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("сколько фильмов вы посморели?", "");
//     }
//     res = numberOfFilms;
//     console.log(typeof (res));

// }
// start();