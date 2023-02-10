function solution(s) {
    // 문자열s에는 공백으로 구분된 숫자들이 저장되어 있음
    // 최소값, 최대값을 찾아 
    // 문자열로 반환
    // split(' ') 은 공백을 기준으로 문자열을 배열화한다.
    arr = s.split(' ');
    arr.sort();
    if(arr[0]<0)arr.sort((a,b) => a-b)
    arr2 = [arr[0],' ',arr[arr.length-1]]
    return arr2.join('')
}

//다른풀이
function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}