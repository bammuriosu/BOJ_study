function solution(number, limit, power) {
    const yaksuNum = (n) => {
        let count = 0;
        for(let i = 1; i<=n; i++){
            if(n % i === 0){
                count++;
            }
        }
        return count
    }
    yaksuArr = [];
    for(let j = 1; j<=number; j++){
        if(yaksuNum(j)>limit) yaksuArr.push(power);
        else  yaksuArr.push(yaksuNum(j))
        
    }
    return yaksuArr.reduce((acc,cur) => acc + cur) ;
}

//다른풀이
function solution(number, limit, power) {
    var answer = 0;
    for (let n = 1; n <= number; n++)
    {
        let count = 0;
        for (let j = 1; j * j <= n; j++)
        {
            if (j * j == n) count++;
            else if (n % j == 0) count += 2;
        }
        if (count > limit) count = power;
        answer += count;
    }
    return answer;
}