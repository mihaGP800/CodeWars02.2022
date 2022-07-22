function solution(string) {
    return string.split('').map(c => c === c.toUpperCase() ? ` ${c}` : c).join('')

    // return(string.replace(/([A-Z])/g, ' $1'));

}

console.log(solution('camelCasingTest'))
console.log(solution(''))