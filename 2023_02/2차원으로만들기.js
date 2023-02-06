function solution(num_list, n) {
    // 정답배열 생성
    const result = []
    // 전 범위 순환
    for(let i = 0 ; i < num_list.length; ) {
        const sliceN = []
        // n만큼 배열 생성
        for(let j = 0 ; j < n ; j++) {
            sliceN.push(num_list[i])
            i++        // 배열만들고, 넣고 그후에야 i++를 해주는 모습
        }
        result.push(sliceN)
    }
    return result
}


// 다른풀이


function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}