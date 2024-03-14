const isConnected = (str1, str2) => {
    let count = 0;
    const len = str1.length;
    
    for(let i = 0; i < len; i++) {
      if(str1[i] !== str2[i]) count++;
    }
    return count === 1 ? true : false;
  }