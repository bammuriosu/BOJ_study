function solution(array, commands) {
    // slice(i-1,j)하고
    // arr[k-1]을 answer에 넣는다.
    let answer = [];
    let arr1 = [];
    for(let el of commands){
        arr1 = array.slice(el[0]-1, el[1]);
        arr1.sort((a,b) => a-b)
        answer.push(arr1[el[2]-1]);
        arr1 = [];
    }
    return answer
}

//다른풀이
function solution(array, commands) {
    var answer = [];

    answer = commands.map(a=>{
        return array.slice(a[0]-1,a[1]).sort((b,c)=>b-c)[a[2]-1];
    })
    return answer;
}