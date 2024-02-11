function solution(k, score) {
    let arr = [];
    let answer = [];
    for(let el of score){
        if(arr.length === k){
            arr.push(el);
            arr.sort((a,b) => a-b);
            arr.shift()
            answer.push(arr[0])
        }
        else{
            arr.push(el);
            arr.sort((a,b) => a-b);
            answer.push(arr[0])
        }
    }
    return answer
}

//다른풀이
function solution(k, score) {
    const stack = []
    return score.reduce((a,c) => {
        if(stack.length < k) {
            stack.push(c)
            stack.sort((a,b) => a - b)
        }
        else {
            stack.push(c)
            stack.sort((a,b) => a - b)
            stack.shift()
        }
        a.push(stack[0])
        return a
    },[])
}
