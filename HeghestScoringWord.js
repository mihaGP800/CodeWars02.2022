function high(x) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let arrNumbersInsteadOfLetters = x.split(' ')
        .map(w => w.split('').reduce((acc, s) => acc + alphabet.indexOf(s) + 1, 0))

    let index = arrNumbersInsteadOfLetters.indexOf(Math.max(...arrNumbersInsteadOfLetters))

    return x.split(' ')[index]
}


console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));