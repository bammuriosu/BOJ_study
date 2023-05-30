//예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 단, 주어진 수가 1인 경우에는 0을, 
//작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
function solution(num) {
    let count = 0
    while(num !== 1){
        if(count > 500) return -1;
        if(num % 2 === 0){
            num = num / 2;
            count ++
        }
        else if(num % 2 === 1){
            num = (num * 3) + 1
            count ++
        }

    }
    return count;
}
//다른풀이
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.