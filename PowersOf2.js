function powersOfTwo(n) {

    console.log([...Array(n + 1)].map((el, i) => 2 ** i))
}

powersOfTwo(0)
powersOfTwo(4)