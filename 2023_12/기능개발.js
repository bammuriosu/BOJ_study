function solution(progresses, speeds) {
    // 뒤에있는 기능이 먼저되면 앞에있는 기능이 완료될때 같이 배포됨
    // 100-원소 / speeds[i] > [7,3,9] 로 만들고 (Math.ceil() 올림 사용)
    // count = 0에서 1씩 더하고 다음요소가 크면 []인 answer에 넣고 리턴
    let answer = [];
    let proSpeed = [];
    let count = 0;
    for(let i = 0; i< progresses.length; i++){
        proSpeed.push(Math.ceil((100-progresses[i])/speeds[i]))
    }
    console.log(proSpeed)
    let max = proSpeed[0]; //max일단 0번째로 두고
    for(let j = 0; j<proSpeed.length; j++){
        if(max < proSpeed[j]){    //max보다 해당요소가 크면
            answer.push(count);  //여태 카운트값 넣고
            count = 1;          //count 1로 초기화
            max = proSpeed[j];   //max값은 큰 해당요소로 초기화
        } else {           // 작거나 같으면
            count++;      //count++
        }
    }
    answer.push(count);
    return answer;
}

//다른풀이
function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}