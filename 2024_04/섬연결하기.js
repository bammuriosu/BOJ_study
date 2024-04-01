const getParent = (parent, x) => {
    if(parent[x] === x) return x;
    return parent[x] = getParent(parent, parent[x]);
  }
  
  const unionParent = (parent, a, b) => {
    const n1 = getParent(parent, a);
    const n2 = getParent(parent, b);
    if(n1 < n2) return parent[n2] = n1;
    else return parent[n1] = n2;
  }
  
  const findParent = (parent, a, b) => {
    const n1 = getParent(parent, a);
    const n2 = getParent(parent, b);
    if(n1 === n2) return true;
    else return false;
  }
  
  function solution(n, costs) {
    let answer = 0;
    const parent = [];
    for(let i = 0; i < n; i++)
      parent.push(i);
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for(const cost of costs) {
      if(!findParent(parent, cost[0], cost[1])) {
        answer += cost[2];
        unionParent(parent, cost[0], cost[1]);
      }
    }
    
    return answer;
  }

  //다른풀이
  let p = {};

function getParent(e){
    if(p[e]===e){
        return e;
    }else{
        return find(p[e]);
    }
}

function union(e){
    let a = getParent(e[0]);
    let b = getParent(e[1]);

    if(a===b){
        return -1;
    }else{
        if(a>b){
            p[a] = b;
        }else{
            p[b] = a;
        }
    }
    return e[2];
}

function solution(n, costs) {
    var answer = 0;
    
    //오름차순 정렬
    costs.sort(function(a,b){
               return a[2]-b[2];
               })
    
    //object 생성
    for(let i =0; i<n; i++){
        p[i] = i;
    }
    
    costs.map((e)=>{
        let cost = union(e);
        if(cost!==-1){
        answer += cost;
        }
    })
    return answer;
}