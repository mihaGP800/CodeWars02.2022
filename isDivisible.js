function isDivisible(n, x, y) {
    console.log(n % x === 0 && n % y === 0)

    console.log(!(n % x || n % y))
}

isDivisible(3, 3, 4)
isDivisible(12, 3, 4)