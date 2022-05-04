function getAverage(marks) {
    return Math.floor(marks.reduce((acc, el) => acc + el) / marks.length)
}

console.log(getAverage([1, 2, 3, 4, 5,]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));