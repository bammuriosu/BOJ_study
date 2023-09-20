function solution(rny_string) {
    let answer = [];
    rny_string.split('').map((el) => {
        if(el==="m"){
            answer.push("r");
            answer.push("n");
        }else{
            answer.push(el);
        }
    })
    return answer.join('')
}

//다른풀이
const solution=r=>r.replaceAll('m','rn')