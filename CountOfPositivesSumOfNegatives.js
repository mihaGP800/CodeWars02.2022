function countPositivesSumNegatives(input) {
    const arr = []

    const countOfPasitive = input.filter(m => m > 0).length

    const negativeSum = input.reduce((acc, n) => {
        return n < 0 ? acc + n : 0
    }, 0)


    const newArr = (countOfPasitive !== 0 && negativeSum !== 0) ? [...arr, countOfPasitive, negativeSum] : arr

    console.log(newArr)
}

countPositivesSumNegatives([20,])