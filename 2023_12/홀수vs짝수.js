function solution(num_list) {
    //filter 두번째 요소로 인덱스사용가능
    evenSum = num_list.filter((el,idx) => idx % 2 === 0 ).reduce((acc,cur) => acc + cur);
    oddSum = num_list.filter((el,idx) => idx % 2 === 1 ).reduce((acc,cur) => acc + cur);
    return evenSum >= oddSum ? evenSum : oddSum;
    
}

//다른풀이
function solution(num_list) {
    let odd = 0;
    let even = 0;

    num_list.forEach((x,i) => i%2 == 0 ? even += x : odd += x);


    return Math.max(odd, even);
}