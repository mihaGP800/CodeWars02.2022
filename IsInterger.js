function SafeInteger(n) {
return Number.isSafeInteger(n)
}

console.log(SafeInteger(900719925474099200));
console.log(SafeInteger(9007199254740990));