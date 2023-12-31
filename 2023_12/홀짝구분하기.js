/* eslint-disable*/
const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

rl.on('line', function (line) {
    const n = Number(line);
    if (n % 2 === 0) {
        console.log(n + " is even");
    } else {
        console.log(n + " is odd");
    }
}).on('close', function () {
    process.exit();
});

//다른풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const result = Number(line) % 2 ? 'odd' : 'even'
    console.log(line, 'is', result)
})
