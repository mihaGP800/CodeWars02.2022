function zero(cb) {return cb ? cb(0) : 0}
function one(cb) {return cb ? cb(1) : 1}
function two(cb) {return cb ? cb(2) : 2}
function three(cb) {return cb ? cb(3) : 3}
function four(cb) {return cb ? cb(4) : 4}
function five(cb) {return cb ? cb(5) : 5}
function six(cb) {return cb ? cb(6) : 6}
function seven(cb) {return cb ? cb(7) : 7}
function eight(cb) {return cb ? cb(8) : 8}
function nine(cb) {return cb ? cb(9) : 9}

function plus(y) {
    return function (x){
        return x + y
    }
}
function minus(y) {
    return function (x){
        return x - y
    }
}
function times(y) {
    return function (x){
        return x * y
    }
}
function dividedBy(y) {
    return function (x){
        return Math.floor(x / y)
    }
}


console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);