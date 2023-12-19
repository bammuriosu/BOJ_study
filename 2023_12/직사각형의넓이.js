function solution(rectangles) {
    //해당공간 0이면 1로 바꾸고 1이면 냅둠
    //[0,0,0,0,0,0,0,0,0,0] 9
    //[0,0,0,0,0,0,0,0,0,0] 8
    //[0,0,0,0,0,0,0,0,0,0] 7
    //[0,0,0,0,0,0,0,0,0,0] 6
    //[0,0,0,0,0,0,0,0,0,0] 5
    //[0,0,0,0,0,0,0,0,0,0] 4
    //[0,0,0,0,0,0,0,0,0,0] 3
    //[0,0,0,0,0,0,0,0,0,0] 2
    //[0,1,1,1,1,1,0,0,0,0] 1
    //[0,0,0,0,0,0,0,0,0,0] 0
    let Matrix = [];
    let count = 0;
    for(let i = 0; i<10; i++){
        let arr = new Array(10).fill(0);
        Matrix.push(arr);
    }
    for(let el of rectangles){
        for(let i = el[0]; i<el[2]; i++){
            for(let j = el[1]; j<el[3]; j++){
                Matrix[i][j] = 1;
            }
        }
    }
    for(let el of Matrix){
        for(let k = 0; k<el.length; k++){
            if(el[k]===1) count++;
        }
    }
    return count
    
}

//다른풀이
function solution(rectangles) {
    let events = [];
    for (let [x1, y1, x2, y2] of rectangles) {
        events.push([y1, x1, x2, 1]); // 직사각형의 시작 부분
        events.push([y2, x1, x2, -1]); // 직사각형의 끝 부분
    }
    // y 좌표를 기준으로 이벤트를 정렬합니다.
    events.sort((a, b) => a[0] - b[0]);

    let active = new Map();
    let lastY = events[0][0];
    let area = 0;

    for (let [y, x1, x2, eventType] of events) {
        let width = 0;
        let lastX = 0;
        let counter = 0;

        for (let [x, count] of active) {
            if (counter > 0) width += x - lastX;
            counter += count;
            lastX = x;
        }

        area += width * (y - lastY);
        lastY = y;

        if (active.has(x1)) active.set(x1, active.get(x1) + eventType);
        else active.set(x1, eventType);

        if (active.has(x2)) active.set(x2, active.get(x2) - eventType);
        else active.set(x2, -eventType);

        // x 좌표를 기준으로 활성 직사각형을 정렬합니다.
        active = new Map([...active.entries()].sort((a, b) => a[0] - b[0]));
    }

    return area;
}
