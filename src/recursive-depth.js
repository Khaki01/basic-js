const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // remove line with error and write your code here
    
    let a = 1;
    let max=0;
    for(let i = 0; i<arr.length; ++i){
      if(Array.isArray(arr[i])){
        let b = this.calculateDepth(arr[i]);
        if(b>max) max=b;
      }
    }
    a+=max;
    return a;
  }

};


