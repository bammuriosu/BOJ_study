
function solution(s) {
    // 숫자 z 있을때 z전에 나온 숫자를 빼고 더한다.
    // 스페이스바 빼고 배열화하고
    // 다음문자가 z면 splice하고
    // reduce해서 합구해서 리턴
    arr = s.split(' ');
    let result = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]==='Z' || arr[i+1] === 'Z') continue;
        result += Number(arr[i])
    }
    return result
}

//다른사람 풀이
function solution(s) {
    const stack = []

    s.split(' ').forEach((target) => {
        if(target === 'Z') stack.pop();
        else stack.push(+target)
    })

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}