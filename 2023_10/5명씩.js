function solution(names) {
    return names.filter((el,i) => i % 5 === 0)
}


//다른풀이

const solution = names => names.filter((_, i) => !(i % 5))