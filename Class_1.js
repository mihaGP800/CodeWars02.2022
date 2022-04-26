class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (!this.lives) throw new Error('You have no more life')
        if (n === this.number) return true

        this.lives--
        return false
    }
}

let guesser = new Guesser(10, 2);
console.log(guesser.guess(8));
console.log(guesser.guess(7));
console.log(guesser.guess(6));
console.log(guesser.lives)