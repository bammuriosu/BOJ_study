function solution(num_list) {
    return num_list.length > 10 ? num_list.reduce((acc,cur) => acc+cur) : num_list.reduce((acc,cur) => acc*cur)
}

//다른풀이

const solution=n=>n.reduce((a,v)=>n.length>10?a+v:a*v)