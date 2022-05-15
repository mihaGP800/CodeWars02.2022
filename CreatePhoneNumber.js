function createPhoneNumber(numbers) {
    // const func = (a, b) => numbers.slice(a, b).join('')
    //
    // return `(${func(0, 3)}) ${func(3, 6)}-${func(6, 10)}`

    let format = '(xxx) xxx-xxxx'

    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i])
    }
    return format

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))