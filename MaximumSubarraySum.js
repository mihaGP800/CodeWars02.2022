const maxSequence = (arr) => {
    // if (arr.every(el => el > 0)) return arr.reduce((acc, el) => acc + el, 0)
    // if (arr.every(el => el < 0)) return 0
    //
    // let maxSum = -Infinity
    // let currentSum = 0
    // for (let i = 0; i < arr.length; i++) {
    //     currentSum = Math.max(arr[i], currentSum + arr[i])
    //     maxSum = Math.max(currentSum, maxSum)
    // }
    // return maxSum


    let currentSum = 0;
    return arr.reduce(function (maxSum, number) {
        currentSum = Math.max(currentSum + number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

console.log(maxSequence([50, 50]))
console.log(maxSequence([-50, -50]))
console.log(maxSequence([]))
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))