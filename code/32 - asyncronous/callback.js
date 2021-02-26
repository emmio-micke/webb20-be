function addNumbers(a, b) {
    return a + b;
}

function substractNumbers(a, b) {
    return a - b;
}

function calculate(a, b, performCalculation) {
    return performCalculation(a, b)
}

console.log(calculate(5, 4, (a, b) => a * b))
