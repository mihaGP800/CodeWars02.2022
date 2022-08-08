function disemvowel(str) {
    // return str.split('').filter(c => !"aeiouAEIOU".includes(c)).join('');

    return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("What are you, a communist?"));