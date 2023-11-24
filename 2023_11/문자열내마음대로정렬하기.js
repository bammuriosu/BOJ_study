function solution(strings, n) {
    let answer = strings.sort((a, b) => {
       if(a[n] > b[n]) return 1;   //요소 a의 n번째 글자가 b보다 사전순으로 뒤에 있다면 뒤로 보냄
        if(a[n] < b[n]) return -1;  // b보다 앞에있다면 a가 b보다 앞에오도록 정렬
        if(a[n] === b[n]){      //같으면 앞글자기준으로 보냄
            if(a>b) return 1;
            if(a<b) return -1;
            return 0;     
        }
    });
    
    return answer;
}


//다른풀이
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}