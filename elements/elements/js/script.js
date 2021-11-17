

const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    hearts = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),


    wrapper = document.querySelector(".wrapper");

// box.style.background = "black";
// box.style.width = "415px";


// // box.style.cssText = "background-color: black";// можнj так задавать свойсвто css будет одно и тоже



// btns.style.borderRadius = "0%";



for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "black";

}



// hearts.forEach(function (item) {
//     item.style.backgroundColor = "blue";

// });
//метод foreach 

let div = document.createElement("div");  //создание элемента которая существует только внутри жаюа

div.classList.add("black"); // добавляет класс внутри блока 

// append - метод который добо вляет элементы на html в конце 
wrapper.append(div); //пример 

// prepend метод который добовляет элементы в конец 

// wrapper.prepend(div);

// есть еще метод before after вставить в начало или в перед 
// before 
// hearts[0].before(div);

// after

// hearts[2].after(div);


// // remove - удалить элемент 

// circles[0].remove();


// hearts[0].replaceWith(circles[0]); replaceWith заменяет элементы между собой 

// innerHTML = добовляет обеты html внутри элементов 
// div.innerHTML = "<h1>hello</h1>";



// textcontect  добовляет только текты в внутри элементов html

div.textContent = "hello";

// insertAdjacentHTML - вставляет html код в внутри html 
div.insertAdjacentHTML("beforebegin", "<h2>Раяна<h2>");//   beforebegin перед элемнтом,afterbegin - после элемнта
