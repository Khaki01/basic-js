const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
   //notInverted = this.arguments[0];
   //finalWord = '';
  encrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(arguments.length<2) throw Error('THROWN');

    let codeEncrypt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arr = codeEncrypt.split('');
    let tableEncrypt = [];
    for(let i = 0; i<26; ++i){
      tableEncrypt.push(arr);
      let a = arr.shift();
      arr+=a;
    }
    let wordToEncrypt = String(arguments[0]);
    let secretCode = String(arguments[1]);
    let temporary = String(secretCode);
    while(secretCode.length<wordToEncrypt.length) secretCode+=temporary;
    wordToEncrypt = wordToEncrypt.toUpperCase;
    secretCode = secretCode.toUpperCase;

    for(let i = 0; i<wordToEncrypt.length; ++i){
      let col = 0;
      let row = 0;
    }
    
    
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
