function solution(s) {
    let answer = [];
    let nums = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    let nums2 = ["0","1","2","3",'4','5','6','7','8','9'];
    for(let el of nums){
        if(s.includes(el) ){
             answer.push(el)
        }
    }
    return answer;
}

//다른풀이
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]); // numbers의 원소 기준으로 split하고
        answer = arr.join(i); // 찢어진 두개 원소 사이에 i를 넣고 합친다
    }

    return Number(answer);
}