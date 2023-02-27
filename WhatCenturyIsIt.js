function whatCentury(year) {
    const century = Math.ceil(year / 100)

    if (century <= 20) return `${century}th`
    switch (century.toString().split('')[1]) {
        case '1':
            return `${century}st`
        case '2':
            return `${century}nd`
        case '3':
            return `${century}rd`
       default:
            return `${century}th`
    }

    // let century = Math.ceil(year/100);
    // return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}

console.log(whatCentury(1999))
console.log(whatCentury(1099))
console.log(whatCentury(2000))
console.log(whatCentury(3000))
console.log(whatCentury(2011))
console.log(whatCentury(3011))
console.log(whatCentury(4611))