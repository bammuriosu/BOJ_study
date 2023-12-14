function solution(participant, completion) {
    //splice의 제거용
    for(let el of completion){
        participant.splice(participant.indexOf(el),1)
    }
    return participant[0]
}

//다른풀이

function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}
