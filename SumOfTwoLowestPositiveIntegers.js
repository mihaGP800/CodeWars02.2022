function sumTwoSmallestNumbers(numbers) {

    // return numbers.sort((a,b) => a-b).slice(0,2).reduce((acc, n) => acc + n)

    const [a,b] = numbers.sort((a,b) => a-b)
    return a + b
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));