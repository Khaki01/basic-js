const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    // remove line with error and write your code here
    this.str.push(String(value));
    return this;
  },
  removeLink(position) {
    if(typeof position == 'number' && 0 < position <= this.str.length){
      this.str.splice(position-1, 1);
    return this;
    }

    this.str = [];
    throw new Error('THROWN');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.str.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let res = '';
    for(let i = 0; i<this.str.length-1; ++i){
      res+='( ' + this.str[i]+' )~~';
    }
    res+='( ' + this.str[this.str.length-1]+' )';

    this.str = [];
    return res;

    // remove line with error and write your code here
  }

  
};

module.exports = chainMaker;
