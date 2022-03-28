function strCount(str, letter){
    console.log(str.split(letter).length-1)
}

strCount('Hello', 'o')
strCount('Hello', 'l')
strCount('', 'z')