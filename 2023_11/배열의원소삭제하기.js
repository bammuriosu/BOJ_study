function solution(arr, delete_list) {
    let answer = [];
    for(el of arr){
        if( delete_list.includes(el)){
            continue;
        }else{
            answer.push(el)
        }
    }
    return answer;
}

//다른풀이
const solution = (arr, dels) => arr.filter((el) => !dels.includes(el))