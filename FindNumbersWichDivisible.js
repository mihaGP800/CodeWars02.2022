function divisibleBy(numbers, divisor) {

    console.log(numbers.filter(el => el % divisor === 0))
    console.log(numbers.filter(el => !(el % divisor)))
}

divisibleBy([1, 2, 3, 4, 5, 6], 2)
divisibleBy([1,2,3,4,5,6], 3)