function calculateFib() {
    const element = <HTMLInputElement> document.getElementById("fib");
    let fibToCalculate = parseInt(element.value)
    const elementToChange = document.getElementById("fibResult")
    elementToChange.innerHTML = fib(fibToCalculate).toString()
}

function fib(x: number): number {
    if(x == 0) {
        return 0
    } else if (x == 1) {
        return 1
    } else if (x == 2) {
        return 1
    } else {
        return fib(x - 1) + fib(x - 2)
    }
}