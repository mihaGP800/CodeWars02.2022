function queueTime(customers, n) {
    const arr = new Array(n).fill(0)

    for (let i = 0; i < customers.length; i++) {
        arr[0] += customers[i];
        arr.sort((a, b) => a - b);
    }

    return arr[arr.length - 1];
}

console.log(queueTime([], 1))
console.log(queueTime([1, 2, 3, 4], 1))
console.log(queueTime([2, 2, 3, 3, 4, 4], 2))
console.log(queueTime([1, 2, 3, 4, 5], 100))