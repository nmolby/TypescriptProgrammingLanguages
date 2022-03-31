function calculateFib() {
    var element = document.getElementById("fib");
    var fibToCalculate = parseInt(element.value);
    var elementToChange = document.getElementById("fibResult");
    elementToChange.innerHTML = fib(fibToCalculate).toString();
}
function fib(x) {
    if (x == 0) {
        return 0;
    }
    else if (x == 1) {
        return 1;
    }
    else if (x == 2) {
        return 1;
    }
    else {
        return fib(x - 1) + fib(x - 2);
    }
}
