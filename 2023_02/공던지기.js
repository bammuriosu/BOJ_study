function solution(numbers, k) {
    let ansIndex = 0;
    
    for(let i = 0; i < k; i++){
        ansIndex += 2;    //2씩늘어남
        
        if(ansIndex > numbers.length){  //만약 길이보다 크면
            ansIndex -= numbers.length; //길이만큼 빼면 됨
        }
    }
    
    return numbers[ansIndex - 2]; //-2한순번 리턴
}

//다른풀이

function solution(numbers, k) {
    return numbers[(--k*2)%numbers.length];
}