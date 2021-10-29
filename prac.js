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

let numberOfFilms = +prompt("сколько фильмов вы посморели?", "");



const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};


const
    qw1 = prompt("последний фильм?", ""),
    qw2 = prompt("На сколько вы его оцените?", ""),
    qw3 = prompt("последний фильм?", ""),
    qw4 = prompt("последний фильм?", "");


personalMovieDB.movie[qw1] = qw2;
personalMovieDB.movie[qw3] = qw4;


console.log(personalMovieDB);


