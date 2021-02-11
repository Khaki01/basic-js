const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth=1) {
    // remove line with error and write your code here
    for(let i = 0; i<arr.length; ++i){
      if(Array.isArray(arr[i])){
        depth++;
        let a = calculateDepth(arr[i], depth);
      }
    }
  }

};