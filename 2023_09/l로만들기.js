function solution(myString) {
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arr = [];
    
    myString.split('').map((el) => {
        if(abc.indexOf(el) < abc.indexOf('l')){
            arr.push('l')
        }else{
            arr.push(el)
        }
    })
    return arr.join('')
}

//다른사람

const solution = myString => myString.replace(/[a-k]/g,'l')