function solution(my_string) {
    // 문자열이 주어집니다
    // 문자열에서 중복된 문자를 제거
    // 남긴 문자열을 리턴
    let arr = my_string.split('')
    let arr2 = [];
    for(let i = 0; i<arr.length; i++){
        if(arr2.indexOf(arr[i])>=0){
            continue;
        }
        arr2.push(arr[i])
    }
    return arr2.join('')
}

//다른풀이


function solution(my_string) {
    return [...new Set(my_string)].join('');
}