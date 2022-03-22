function removeEveryOther(arr) {
    console.log(arr.filter((el, i) => i === 0 || (i + 1) % 2))

    console.log(arr.filter((el, i) => i % 2 === 0))

    console.log(arr.filter((el, i) => !(i % 2) ))


    let newArr = []
    for (let i = 0; i < arr.length; i+=2) {
        newArr.push(arr[i])
    }
    console.log(newArr)
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])