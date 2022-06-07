function expandedForm(num) {

    return num
        .toString()
        .split('')
        .map((n, i, arr) => n * Math.pow(10, arr.length - i - 1))
        .filter(el => el !== 0)
        .join(' + ')
}

console.log(expandedForm(12));
console.log(expandedForm(70304));