function solution(num_list, n) {
    let count = 0;
    let answer = [];
    while(count<num_list.length){
        answer.push(num_list[count])
        count += n;
    }
    return answer;
}


const solution = (num_list, n) => num_list.filter((_, i) => !(i % n))