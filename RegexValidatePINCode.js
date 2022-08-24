function validatePIN(pin) {

    // if (pin.length === 4 || pin.length === 6) {
    //     return /^\d+$/.test(pin)
    // }
    // return false


    return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("-123"));
console.log(validatePIN("12345"));
console.log(validatePIN("1234"));
console.log(validatePIN("123456"));