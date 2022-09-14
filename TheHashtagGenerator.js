function generateHashtag(str) {
    const withoutSpaces = str.split(' ').map(w => w !== '' ? w[0].toUpperCase() + w.slice(1) : '').join('')
    if (withoutSpaces.length === 0 || withoutSpaces.length >= 140) return false
    return `#${withoutSpaces}`
}

console.log(generateHashtag("")) //false
console.log(generateHashtag(" ".repeat(200))) //false
console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("Codewars"))