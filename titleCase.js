function titleCase(title, minorWords) {
    let minorWordsArr = minorWords ? minorWords.toLowerCase().split(' ') : []

    return title.toLowerCase().split(' ').map((el, i) => {
        if (el !== '' && (minorWordsArr.indexOf(el) === -1 || i === 0)) {
            el = el.split('')
            el[0] = el[0].toUpperCase()
            el = el.join('')
        }
        return el
    }).join(' ')

}

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('the quick brown fox'));