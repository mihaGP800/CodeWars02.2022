function powersOfTwo(n) {

    console.log([...Array(n + 1)].map((_, i) => 2 ** i))
}

powersOfTwo(0)
powersOfTwo(4)