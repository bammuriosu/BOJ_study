function solution(tickets) {
    let answer = [];
    const result = [];
    const visited = [];
    
    tickets.sort();
    
    const len = tickets.length;
    const dfs = (str, count) => {
      result.push(str);
      
      if(count === len) {
        answer = result;
        return true;
      }
      
      for(let i = 0; i < len; i++) {
        if(!visited[i] && tickets[i][0] === str) {
          visited[i] = true;
          
          if(dfs(tickets[i][1], count+1)) return true;
          
          visited[i] = false;
        }
      }
      
      result.pop();
      
      return false;
    }
    
    dfs("ICN", 0);
    
    return answer;
  }

  //다른풀이

  function solution(tickets) {
    const answer = [];
  
    function DFS(from, remainTickets, path) {
      const updatedPath = [...path, from];
      if (remainTickets.length === 0) {
        answer.push(updatedPath);
      } else {
        remainTickets.map((ticket, index) => {
          if (ticket[0] !== from) return;
  
          const to = ticket[1];
          const nextRemainTickets = [...remainTickets];
          nextRemainTickets.splice(index, 1);
          DFS(to, nextRemainTickets, updatedPath);
        });
      }
    }
  
    DFS('ICN', tickets, []);
    return answer.sort()[0];
  }