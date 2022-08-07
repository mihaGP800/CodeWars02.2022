function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    str.split('').forEach(el => {
        for (let i = 0; i < vowels.length; i++) {
            el.includes(vowels[i]) && ++count
        }
    })

    return count;


    return (str.match(/[aeiou]/ig)||[]).length;

    return str.replace(/[^aeiou]/gi, '').length;

    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

console.log(getCount("abracadabra"));