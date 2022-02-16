function DNAtoRNA(dna) {

    return dna.split('').map(n => n === 'T' ? 'U' : n).join('');

}
DNAtoRNA("GCAT")