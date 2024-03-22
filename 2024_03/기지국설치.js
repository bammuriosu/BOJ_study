function solution(n, stations, w) {
    let answer = 0;
    const distance = [];
  
    for (let i = 1; i < stations.length; i++) {
      distance.push(stations[i] - w - 1 - (stations[i - 1] + w));
    }
    distance.push(stations[0] - w - 1);
    distance.push(n - (stations[stations.length - 1] + w));
  
    for (const d of distance) {
      if (d <= 0) continue;
      else answer += Math.ceil(d / (2 * w + 1));
    }
  
    return answer;
  }

  //다른풀이

  function solution (n, stations, w) {
    let answer = 0;
    const coverage = w * 2 + 1;
    
    const endPoint = n - stations.reduce((prev, cur) => {
      const appartments = cur - w - 1 - prev;
      answer += appartments > 0 ? Math.floor((appartments - 1) / coverage) + 1 : 0;
      return cur + w;
    }, 0);
    
    if(endPoint > 0)
      answer += Math.floor((endPoint - 1) / coverage) + 1;
    
    return answer;
  }