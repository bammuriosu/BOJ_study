function solution(todo_list, finished) {
    return todo_list.filter((el,i) => finished[i] === false)
}

//다른풀이
const solution=(t,f)=>t.filter((v,i)=>!f[i])