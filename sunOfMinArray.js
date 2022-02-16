function sumOfMinimums(arr) {
    let x = arr.reduce((acc, n) => (acc + Math.min(...n)), 0)

    return console.log(x);

    // your code here
}
sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3]])