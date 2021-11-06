
let x = +prompt("Введите первое значение!", ""),
    y = +prompt("Введите второе значение!", ""),
    z = prompt("+, -, /, *", ""),
    result = 0;
function check() {

    while (x == null || x == "" || isNaN(x)) {


        x = +prompt("Введите первое значение!", "");
    }

    while (y == null || y == "" || isNaN(y)) {
        y = +prompt("Введите второе значение!", "");
    }

    while (z == null || z == "" || !isNaN(z) || (z != "+" && z != "-" && z != "/" && z != "*")) {
        z = prompt("+, -, /, *", "");
    }


}

check();


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
clac();
