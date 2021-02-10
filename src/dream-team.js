const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if(!(Array.isArray(members))) return false;

  let res = '';
  for(let i = 0; i<members.length; ++i){
    if((typeof members[i])=='string'){
      let ind = 0;
      while(members[i][ind]==' ') ++ind;
      res+=members[i][ind];
    }
  }
  res = res.toUpperCase();
  res = res.split('').sort().join('');

  return res;
};
