function solution(n, numlist) {
    //정수 n, 정수배열 numlist
    //numlist에서 n의배수에 해당하는 수를 담은 배열을 리턴
    return numlist.filter(el => el%n===0)
    
}

//다른풀이
function solution(n, numlist) {
    var answer = [];

    for (let i =0; i<= numlist.length; i++) {
      if(numlist[i] % n === 0) {
        answer.push(numlist[i]);
      }
    }
    return answer;
}
