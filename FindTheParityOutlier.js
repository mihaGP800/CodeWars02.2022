function findOutlier(arr) {
    let newArr = arr.filter(el => el % 2 === 0)

    return newArr.length === 1
        ? newArr[0]
        : arr.filter(el => el % 2 !== 0)[0]
}


console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));