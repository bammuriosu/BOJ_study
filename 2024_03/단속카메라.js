function solution(routes) {
    let answer = 1;  
    
    routes.sort((a, b) => a[0] - b[0]);
    
    let out = routes[0][1];
    
    for(let i = 1; i < routes.length; i++) {

      if(out < routes[i][0]) {
        answer++;
        out = routes[i][1];
      }
      if(out > routes[i][1]) {
        out = routes[i][1];
      }
    }
    
    return answer;
  }

//다른풀이
function solution(routes) {
    let answer = 0;        
    let preCamera = -30001;
    
    routes.sort(function(a,b){
                return a[1]-b[1];
                });
    
    routes.map((e)=>{
        if(e[0] > preCamera ){
            answer ++;
            preCamera = e[1];
        }
    })
    
    return answer;
}

