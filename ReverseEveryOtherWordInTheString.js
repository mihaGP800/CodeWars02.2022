function reverse(str){
    return str.split(' ').map((w, i) => i%2 ? w.split('').reverse().join(''): w).join(' ').trim()
}

console.log(reverse("Reverse this string, please!"));