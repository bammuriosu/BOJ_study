function solution(n, m, section) {
    let answer = 1;
    if(section.length === 0) return 0;
    while(section[section.length-1]-section[0]+1 > m){
        answer++;
        m++;
    }
    return answer;
}

function solution(n, m, sections) {
    var answer = 0;
    var painted = 0;
    for(var section of sections) {
        if(painted < section) {
            answer++;
            painted = section+m-1;
        }
    }
    return answer;
}