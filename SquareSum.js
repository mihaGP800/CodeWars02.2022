function squareSum(numbers) {
    // let result = numbers
    //     .map(n => n ** 2)
    //     .reduce((acc, arg) => (acc += arg), 0)
    // return console.log(result);

    numbers.map(n => n ** 2).reduce((acc, arg) => (acc += arg), 0)

    
    return console.log(numbers.reduce((sum, n) => (sum + n**2), 0));

    // return numbers.reduce(function(sum, n){
    //     return (n*n) + sum;
    //   }, 0)


}
squareSum([1, 2])
squareSum([0, 3, 4, 5])