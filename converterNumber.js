function digitize(n) {

    return console.log(n.toString().split('').reverse().map(n => parseInt(n)));

    // return String(n).split('').map(Number).reverse()

    // return (n + '').split('').map(Number).reverse();

    // return Array.from(String(n), Number).reverse();

    //code here
}
digitize(35231)