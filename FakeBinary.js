function fakeBin(x) {
    function convert(xOneDigit) {
        for (let i = 0; i < xOneDigit.length; i++) {
            return ((xOneDigit[i] < 5) ? 0 : 1)
        }
    } return console.log(x.split('').map(convert).join(''))
}
fakeBin('50937')