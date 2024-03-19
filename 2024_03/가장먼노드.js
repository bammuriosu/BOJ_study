function solution (n, edge) {
    const connects = new Array(n).fill().map(_ => []);
    for(const e of edge) {
      connects[e[0]-1].push(e[1]-1);
      connects[e[1]-1].push(e[0]-1);
    }
    
    const visited = [1];
    const queue = [0];
    while(queue.length) {
      const cur = queue.shift();
      
      for(const next of connects[cur]) {
        if(!visited[next]) {
          visited[next] = visited[cur] + 1;
          queue.push(next);
        }
      }
    }
    
    const max = Math.max(...visited);
    
    return visited.filter(el => el === max).length;
  }

  //다른풀이
  function solution(n, edge) {
    let answer = 0;
  
    // 인접리스트를 만든다
    let adjList = {};
    for (let i = 1; i <= n; i++) {
      adjList[i] = [];
    }
  
    // edge를 연결해준다.
    edge.forEach((element) => {
      adjList[element[0]].push(element[1]);
      adjList[element[1]].push(element[0]);
    });
  
    return bfs(adjList);
  }