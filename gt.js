// german wordlist parser
// https://github.com/patsytau/anki_german_a1_vocab/blob/main/Goethe%20Institute%20A1%20Wordlist.txt

let fs = require('fs')

let raw = fs.readFileSync('_t', {encoding:'utf8'}).split('\n').map(lin => {
    return lin.split('\t')
})

let psd = {
    "grm": raw.map(lin => `${lin[1]};\n${lin[2]}`),
    "eng": raw.map(lin => `${lin[3]};\n${lin[4]}`),
}

console.log(JSON.stringify(psd, null, 4))