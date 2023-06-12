function solution(num_list, n) {
    return num_list.includes(n) ? 1 : 0
}

//다른풀이

const solution=(l,n)=>+(l.includes(n))
