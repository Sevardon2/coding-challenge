/* 
Soal :
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/


// Cara 1
/* function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let rna = '';
    for(let i = 0; i < dna.length; i++){
        if(dna[i] === 'T'){
            rna += 'U';
        } else {
            rna += dna[i];
        }
    }
    return rna;
} */

// Cara 2
/* function DNAtoRNA(dna) {
    let rna = '';
    for(let i = 0; i < dna.length; i++){
        rna += dna[i] === 'T' ? 'U' : dna[i];
    }
    return rna;
} */

// Cara 3
/* function DNAtoRNA(dna) {
    return dna.split('').map((el) => el === 'T' ? 'U' : dna).join('');
} */

// Cara 4
// const DNAtoRNA = dna => dna.split('T').join('U');

// Cara 5
// const DNAtoRNA = dna => dna.replace(/T/g,'U')

// Cara 6
const DNAtoRNA = dna => dna.replaceAll('T','U');

console.log(DNAtoRNA('TTTT'));