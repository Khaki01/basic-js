const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // remove line with error and write your code here
  let turns = 0;
  for(let i = 0; i<disksNumber; ++i){
    turns+=2**i;
  }
  let seconds = Math.floor(turns*3600/turnsSpeed);

  return {'turns':turns, 'seconds':seconds};
};
