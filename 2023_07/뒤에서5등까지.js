function solution(num_list) {
    // sort해서 
    // slice
    let newArr = num_list.sort((a,b) => a-b);
    return newArr.slice(0,5)
}

//다른풀이

const solution=l=>l.sort((a,b)=>a-b).slice(0,5)