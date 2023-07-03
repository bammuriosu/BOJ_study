function solution(sizes) {
    //가로보다 세로가 크면 둘의 위치를 바꾼다
    //배열의 0번째중 max, 1번째중 max를 뽑아서 곱해서 리턴
    for(let el of sizes){
        if(el[0] < el[1]){
            let tmp = el[0];
            el[0] = el[1];
            el[1] = tmp;
        }
    }
    let garoMax = 0;
    let seroMax = 0;
    for(let el of sizes){
        if(el[0] > garoMax) garoMax = el[0];
        if(el[1] > seroMax) seroMax = el[1];
    }
    return garoMax * seroMax;
}

//다른풀이
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}