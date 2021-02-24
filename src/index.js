module.exports = module.exports = function check(str, bracketsConfig) {
 let brackets = [];
    bracketsConfig.forEach(item => {
      brackets.push(item.join(''));      
  });

  for(i=0; i<brackets.length; i++) {
    if (str.includes(brackets[i])) {
      str.replace(brackets[i],'');
      i = -1;
    }     
  }

  return str.length === 0;
   
}

