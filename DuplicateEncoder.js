function duplicateEncode(word) {
    // word = word.toLowerCase()
    // return word.split('').map((el, i, arr) => word.split(el).length === 2 ? '(' : ')').join('')

    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}

console.log(duplicateEncode('success'))
console.log(duplicateEncode('din'))
console.log(duplicateEncode('(( @'))