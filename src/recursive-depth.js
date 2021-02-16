const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
    for(let i = 0; i<arr.length; ++i){
      if(Array.isArray(arr[i])){
        let a = calculateDepth(arr[i], depth);
      }
    }
  }

};