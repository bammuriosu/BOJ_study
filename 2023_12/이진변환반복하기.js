function solution(s) {
    //s의 모든 0을 제거함
    //s의 길이를 c라고 할때, s를 "c를 2진법으로 표현한 문자열"로 바꿈
    //s가 "1"이 될때까지 계속해서 이진변환을 가했을때
    //이진변환의 횟수와 제거된 모든 0의 개수 리턴
    //num.toString(2) <10진법을 2진법으로 변환
    //parseInt("10101101000", 2) <2진법을 10진법으로 변환
    let changedCount = 0;
    let deletedZero = 0;
    while(s!=="1"){
        let sArr = s.split('');
        let newArr = [];
        for(let i = 0; i<sArr.length; i++){
            if(sArr[i]==="0"){
                deletedZero++;
            }else{
                newArr.push(sArr[i]);
            }
        }
        s = parseInt(newArr.join('').length,2).toString();
        changedCount++;
    }
    return [changedCount, deletedZero]
}
    
//다른풀이
function solution(s) {
    // 이진 변환의 횟수와 제거된 모든 0의 개수를 저장하는 배열을 초기화합니다.
    let answer = [0, 0];
  
    // s의 길이를 저장하는 변수를 초기화합니다.
    let sLen = 0;
  
    // s의 길이가 1보다 클 동안 반복합니다.
    while (s.length > 1) {
      // 현재 s의 길이를 sLen에 저장합니다.
      sLen = s.length;
  
      // s에서 모든 "0"을 제거합니다.
      s = s.split("0").join("");
  
      // 이진 변환의 횟수를 증가시킵니다.
      answer[0]++;
  
      // 제거된 "0"의 개수를 증가시킵니다.
      // sLen에서 현재 s의 길이를 뺀 값이 제거된 "0"의 개수입니다.
      answer[1] += (sLen - s.length);
  
      // s를 "s의 길이를 2진법으로 표현한 문자열"로 바꿉니다.
      s = s.length.toString(2);
    }
  
    // 이진 변환의 횟수와 제거된 모든 0의 개수를 반환합니다.
    return answer;
  }