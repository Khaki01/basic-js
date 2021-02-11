const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // remove line with error and write your code here
  let res = '';
  let finalAdder = '';
  str = String(str);
  let repTimes = 0;
  let separator = '+';
  let addition = '';
  let additionRepTimes = 0;
  let additionSeparator = '|';
  if(options['repeatTimes']) repTimes = options['repeatTimes'];
  if(options['separator']) separator = options['separator'];
  if('addition' in options) addition = String(options['addition']);
  if(options['additionRepeatTimes']) additionRepTimes = options['additionRepeatTimes'];
  if(options['additionSeparator']) additionSeparator = options['additionSeparator'];

  for(let i = 0; i<additionRepTimes-1; ++i){
    finalAdder+=addition;
    finalAdder+=additionSeparator;
  }
  finalAdder+=addition;

  for(let i = 0; i<repTimes-1; ++i){
    res+=str;
    res+=finalAdder;
    res+=separator;
  }
  res+=str;
  res+=finalAdder;

  return res;

};
  