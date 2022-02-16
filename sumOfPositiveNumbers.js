function positiveSum(arr) {
    return arr.filter(n => n > 0).reduce((acc, num) => acc + num, 0)

    // return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSum([1, -2, 3, 4, 5]));