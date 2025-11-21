let fs = require('fs')

let arr = fs.readFileSync('grm_tato.tsv', {encoding:'utf8'}).split('\n')
for (let fl = 0; fl<50; fl++) {

    let arrf = arr.filter((v,i) => Math.floor(i/20000)==fl )
    fs.writeFileSync(`grm_tato/${fl}.txt`, arrf.join('\n') )
}