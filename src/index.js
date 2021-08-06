const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
    let answer = [];
    let string = String(expr);
    let word = string.match(/.{10}/g);
    for (let i = 0; i < word.length; i++) {
        let letter = word[i].match(/.{2}/g);
        let morse = [];
        for (let j = 0; j < letter.length; j++) {
            if (letter[j] === '10') {
                let a = morse.push('.');
            }
            if (letter[j] === '11') {
                let a = morse.push('-');
            }
        }
    //console.log(morse);
    morse = morse.join('');
        if (morse.length === 0) {
            let b = answer.push(' ');
        } else {
        let b = answer.push(MORSE_TABLE[morse]);
        }
    //console.log(morse.length);
    }
    let q = answer.join('');
    console.log(q);
    return q;
}

module.exports = {
    decode
}