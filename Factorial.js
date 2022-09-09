function factorial(n) {
    if (n < 0 || n > 12) throw new RangeError('Error')

    return n === 0 ? 1 : n * factorial(n - 1)
}

console.log(factorial(-1));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));