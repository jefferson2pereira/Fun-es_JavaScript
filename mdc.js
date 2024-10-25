  function MDC(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}
var num1 = 15;
var num2 = 25;
let mdc = MDC(num1, num2);
console.log(`O Maximo Divisor Comum de [${num1} e ${num2}] é ${mdc}`);
