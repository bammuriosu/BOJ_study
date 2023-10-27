function solution(s) {

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let sArr = s.split('');
    let answer = [];
    
    for(let i = 0; i<sArr.length; i++){
        if(alphabet.indexOf(answer[0])<alphabet.indexOf(sArr[i])){
            answer.unshift(sArr[i]);
        }else{
            answer.push(sArr[i]);
        }
    }
    return answer.join('')
    
}

//다른풀이
function solution(s) {
    return s.split('').sort().reverse().join('');
}