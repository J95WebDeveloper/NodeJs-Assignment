const fs = require('fs');


//  write text file
const data = 'Learning how to write in a file...'
fs.writeFile('output.txt', data, (err) => {
    console.error(err)
})


// read text file
fs.readFile('input.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString())
})