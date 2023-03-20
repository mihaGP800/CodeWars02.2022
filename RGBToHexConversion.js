function rgb(r, g, b) {
    return Object.values(arguments).reduce((acc, el) => {
        let temp = el <= 0 ? '00' : el > 255 ? 'ff' : el.toString(16)

        // return acc + (temp.length < 2 ? ('0' + temp) : temp)
        return acc + temp.padStart(2, '0')
    }, '').toUpperCase()
}

console.log(rgb(0, 0, 0))
console.log(rgb(0, 0, -20))
console.log(rgb(300, 255, 255))
console.log(rgb(14, 148, 8))