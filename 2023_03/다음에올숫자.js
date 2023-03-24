function solution(common) {
    //인덱스 1-0 === 인덱스 2-1 이라면 등차수열, 아니면 등비수열
    // 등차수열이면 인덱스 1-0한걸 마지막원소에 더해준다.
    // 등비수열이면 인덱스 1-0한걸 마지막요소에 곱해준다.
    if(common[1]-common[0] === common[2]-common[1]){
        return common[common.length-1] + (common[1]-common[0]);
    }else {
        return common[common.length-1] * (common[1]/common[0])
    }
}