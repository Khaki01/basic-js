const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  //if(sampleActivity==NaN) return false;
  if(!+sampleActivity || (typeof sampleActivity)!='String') return false;
  if(sampleActivity>=15 || sampleActivity<=0) return false;
  if(+sampleActivity){
    return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(Math.log(2)/HALF_LIFE_PERIOD));
  }
};
