function pigIt(str) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    return str.split(' ').map(el => el.slice(1,el.length) + el[0] + (regex.test(el)? '' : 'ay')).join(' ')



    // return str.replace(/\w+/g, (w) => {
    //     return w.slice(1) + w[0] + 'ay';
    // });
}

console.log(pigIt('Pig latin is cool !'));