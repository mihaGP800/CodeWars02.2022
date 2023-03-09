function isValidIP(str) {
    return str
        .split('.')
        .every((el, i, arr) =>
            arr.length === 4
            && /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/.test(el));
}

console.log(isValidIP('0.0.0.0'))
console.log(isValidIP('137.255.156.100'))
console.log(isValidIP(''))
console.log(isValidIP('256.1.2.3'))
console.log(isValidIP('12.34.56.-7'))