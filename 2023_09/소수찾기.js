//1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

function isSosu(n){
    let count = 0;
    for(let i = 1; i<=n; i++){
        if(n % i === 0) count ++;
    }
    return count === 2 ? true : false
}

function solution(n) {
    
    let arr1 = 0;
    for(let i = 2; i<=n; i++){
        if(isSosu(i)) arr1++;
    }
    return arr1
    
}


// 다른풀이

function solution(n) {
    let answer = 0;
    const arr = new Array(n+1).fill(true); // 초깃값 설정
    const end = Math.sqrt(n) 
    
    for(let i = 2; i <= end; ++i){
        // 이미 소수가 아닌 인덱스는 건너뛴다.
        if(arr[i] === false){
            continue; 
        }
        // 소수가 아닌 데이터는 false로 입력한다.
        for(let k = i * i; k <= n; k += i){
            arr[k] = false;
        }
    }
    // 소수의 갯수를 구한다.
    for(let i = 2; i <= n; ++i){
        if(arr[i] === true){
            answer++;
        }
    }
    return answer;
}