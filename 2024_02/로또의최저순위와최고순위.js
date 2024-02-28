function solution(lottos, win_nums) {
    const score = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    let count = 0;
    let includesZeroCount = 0;
    for(let el of lottos){
        if(win_nums.includes(el)) {
            count++;
            includesZeroCount++;
        }else if(el===0){
            includesZeroCount++;
        }
    }
    return [score[includesZeroCount],score[count]];
}

//다른풀이

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
