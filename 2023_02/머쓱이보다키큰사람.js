function solution(array, height) {
    // 반친구 키 배열중
    // height보다 키큰사람 수를 리턴
    // 끼워놓고 length-인덱스-1
    array.push(height);
    array.sort();
    return array.length-array.indexOf(height)-1
}

//다른풀이
function solution(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}