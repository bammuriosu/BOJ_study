function solution(n, lost, reserve) {
    //여벌의 체육복 학생의 배열 reserve
    //우선 answer에 reserve.length + n - reserve.length - lost.length 넣고
    //lost배열의 요소 -1이 reserve안에 있으면 reserve splice 후 answer++
    //else if + 1이 있으면 splice후 answer++
    //그래도 없으면 continue
    let realLost = lost.filter(el => !reserve.includes(el));
    let realReserve = reserve.filter(el => !lost.includes(el)); 
    let answer = realReserve.length + (n - realReserve.length - realLost.length);
    realLost.sort((a,b) => a-b);
    for(let i = 0; i<realLost.length; i++){
        if(realReserve.indexOf(realLost[i]-1)>=0){
            realReserve.splice(realReserve.indexOf(realLost[i]-1),1);
            answer++
        }else if(realReserve.indexOf(realLost[i]+1)>=0){
            realReserve.splice(realReserve.indexOf(realLost[i]+1),1);
            answer++
        }else continue;
    }
    return answer;
}

//다른풀이
function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}