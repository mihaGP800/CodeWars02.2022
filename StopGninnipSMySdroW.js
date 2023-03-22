function spinWords(string){
    return string.split(' ').map(w => w.length >= 5 ?  w.split('').reverse().join('') : w).join(' ')

    // return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

console.log(spinWords("Hey fellow warriors"))