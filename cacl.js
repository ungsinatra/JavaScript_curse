
let x = +prompt("Введите первое значение!", ""),
    y = +prompt("Введите второе значение!", ""),
    z = prompt("+, -, /, *", ""),
    result = 0;
function check(reverse) {

    while (x == null || x == "" || isNaN(x)) {


        x = +prompt("Введите первое значение!", "");
    }

    while (y == null || y == "" || isNaN(y)) {
        y = +prompt("Введите второе значение!", "");
    }

    while (z == null || z == "" || !isNaN(z) || (z != "+" && z != "-" && z != "/" && z != "*")) {
        z = prompt("+, -, /, *", "");
    }

    reverse();
}
 
check(clac);


function clac() {
    if (z == "+") {
        result = (x + y);
        alert(result);
    } else if (z == "-") {
        result = (x - y);
        alert(result);
    } else if (z == "*") {

        result = (x * y);
        alert(result);
    } else if (z == "/") {
        result = (x / y);
        alert(result);

    }

    console.log(result);
}
