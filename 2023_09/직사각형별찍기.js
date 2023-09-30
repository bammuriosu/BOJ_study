process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for(let row=0;row<b;row++){
        console.log('*'.repeat(a))
    }
});

//다른풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const star = `${'*'.repeat(a)}\n`;

    console.log(star.repeat(b));
});