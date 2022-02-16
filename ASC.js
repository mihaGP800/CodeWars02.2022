function uniTotal(string) {
    // let x = string
    //     .split('')
    //     .reduce((acc, n) => (acc + n.charCodeAt()), 0)
    // return console.log(x)

    let x = [...string]
        .reduce((acc, n) => (acc + n.charCodeAt()), 0)
    return console.log(x)



    // total up dem unicodes!
}
uniTotal('asd')