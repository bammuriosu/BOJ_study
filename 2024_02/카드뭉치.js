function solution(cards1, cards2, goal) {
    let answer = [];
    for(let i = 0; i<goal.length; i++){
        if(goal[i]===cards1[0]){
            cards1.shift();
        }else if(goal[i]===cards2[0]){
            cards2.shift();
        }else{
            return "No"
        }
    }
    return "Yes";
}

//다른풀이
const solution = (cards1, cards2, goal) => {
    const answer = [];
    for(const str of goal){
        const idx1 = cards1.findIndex((v)=>v===str);
        if(idx1===0){
            answer.push(cards1.shift());
            continue;
        }
        const idx2 = cards2.findIndex((v)=>v===str)
        if(idx2===0){
            answer.push(cards2.shift());
            continue;
        }
    }
    return goal.join(' ')===answer.join(' ') ? "Yes" : "No";
}