function squareDigits(num){
    return +num.toString().split('').map(d => d**2).join('')
}

console.log(squareDigits(3212));