function solution(k, m, score) {
    // 사과 한상자의 가격은 p*사과수m
    // 좋은사과를 한상자에 몰아주자
    // sort하고 m개씩 빼
    // 사과 총가격 리턴
    let sortedScore = score.sort((a,b) => b-a);
    let answer = 0;
    console.log(sortedScore);
    for(let i = 0; i<sortedScore.length; i++){
        if((i+1)%m === 0) answer += sortedScore[i]*m;
    }
    return answer;
    
}

//다른풀이
function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}