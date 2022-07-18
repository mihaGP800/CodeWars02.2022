function wave(str) {
    let res = []

    for (let i = 0; i < str.length; i++) {
        let newStr = str.split('').map((c, index) => index === i && c !== ' ' ? c.toUpperCase() : c).join('')
        if (str[i] !== ' ') res.push(newStr)
    }


    return res
}

console.log(wave("he ll o"))