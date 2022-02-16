function noSpace(x){
    console.log(x.split(' ').join(''))

    x.replace(/\s/g, '');

    x.replace(/ /g, "")
}
noSpace('8aaaaa dddd r     ')