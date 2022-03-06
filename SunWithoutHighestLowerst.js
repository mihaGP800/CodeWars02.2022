function sumArray(array) {

    const x = array.reduce((acc, n) => acc + n, 0) - Math.min(...array) - Math.max(...array)
    console.log(x)
}

sumArray([6, 2, 1, 8, 10])