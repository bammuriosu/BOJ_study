const solution = (s) => {
    // 모든단어의 첫문자가 대문자
    // 스페이스바기준으로 나누고
    // 첫번째글자 대문자화해주고
    // 스페이스바 끼워서 리턴
    let arr = s.toLowerCase().split(' ');
    return arr.map(el => el[0].toUpperCase()+el.slice(1)).join(' ')
}


//다른풀이

function solution(s) {
    var answer = '';
   let result = s.split(' ');

   let result2 = result.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());

   answer = result2.join(" ")
    return answer;
}