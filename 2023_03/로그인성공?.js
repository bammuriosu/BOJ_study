function solution(id_pw, db) {
    //아이디,비번 일치하면 login리턴
    const [id, pw] = id_pw;
    const map = new Map(db);
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
  }
  