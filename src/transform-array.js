const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // remove line with error and write your code here
  if(!Array.isArray(arr)) throw Error('THROWN');

  let res = [];
  res.push('XX');

  for(let i = 0; i<arr.length; ++i){
    if(arr[i]=='--discard-next'){
      res.push('XX');
      ++i;
    }
    else if(arr[i]=='--discard-prev'){
      res.pop();
    }
    else if(arr[i]=='--double-next'){
      if(i!=arr.length-1) res.push(arr[i+1]);
    }
    else if(arr[i]=='--double-prev'){
      res.push(res[res.length-1]);
    }
    else res.push(arr[i]);
  }

  return res.filter(function(el){return el!='XX'});
};
