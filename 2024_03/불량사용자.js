function solution(user_id, banned_id) {
    answer = 0
  
    dfs(user_id.slice(), banned_id.slice(), []);
    answer = Array.from(new Set(arr.map(i => i.sort().join()))).length
    return answer;
  }
  var answer
  var arr = []
  
  function dfs(remain_users, banned_id, ban) {
    if (banned_id.length == 0) {
      arr.push(ban)
      return 1
    }
    else {
      for (var idx = 0; idx < remain_users.length; idx++) {
        if (match(remain_users[idx], banned_id[0])) {
          dfs([...remain_users.slice(0, idx), ...remain_users.slice(idx + 1)],
            banned_id.slice(1),
            [...ban, remain_users[idx]]
          )
        }
      }
      return 0
    }
  }
  
  function match(id, pattern) {
    pattern = pattern.replace(/\*/g, ".");
    const regex = RegExp("\^(" + pattern + "\)$")
    // console.log(id, pattern,regex.test(id)) 
    return regex.test(id)
  }

  //다른풀이

  function solution(user_id, banned_id) {
    const selected = Array(user_id.length).fill(false);
    const regex = banned_id.map(id => new RegExp(`^${id.replaceAll('*', '.')}$`));
    const set = new Set();
    
    const dfs = (index = 0, arr = []) => {
        if (index === banned_id.length) {
            set.add(arr.sort().join(','));
        } else {
            for (let i = 0; i < user_id.length; i++) {
                if (selected[i]) {
                    continue;
                }
                
                if (user_id[i].match(regex[index])) {
                    selected[i] = true;
                    dfs(index + 1, [...arr, user_id[i]]);
                    selected[i] = false;
                }
            }
        }
    };
    
    dfs();
    
    return set.size;
}