const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
   //notInverted = this.arguments[0];
   //finalWord = '';
  encrypt() {
    // remove line with error and write your code here
    if(arguments.length!=2) throw new Error('THROWN');

    let codeEncrypt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let vigenere = {'A':0, 'B':1, 'C':2, 'D':3, 'E':4,
                    'F':5, 'G':6, 'H':7, 'I':8, 'J':9, 
                    'K':10, 'L':11, 'M':12, 'N':13, 'O':14, 
                    'P':15, 'Q':16, 'R':17, 'S':18, 'T':19, 
                    'U':20, 'V':21, 'W':22, 'X':23, 'Y':24, 'Z':25}

    let wordToEncrypt = String(arguments[0]);
    let secretCode = String(arguments[1]);
    
    wordToEncrypt = wordToEncrypt.toUpperCase();
    secretCode = secretCode.toUpperCase();
    let keyWord = '';
    let ind = 0;

    for(let i = 0; i<wordToEncrypt.length; ++i){
      if(vigenere[wordToEncrypt[i]]){
        if(ind>secretCode.length-1){ind = 0;}
        keyWord+= secretCode[ind];
        ++ind;
        console.log(ind);
      }
      else{
        keyWord+=wordToEncrypt[i];
      }
    }
    
    
    

    let res = '';
    for(let i = 0; i<wordToEncrypt.length; ++i){
      if(vigenere[wordToEncrypt[i]]) {
        let col = vigenere[wordToEncrypt[i]];
        let row = vigenere[keyWord[i]];
        if(col+row>25) res+=codeEncrypt[col+row-26];
        else res+=codeEncrypt[col+row];
      }
      else{
        res+=wordToEncrypt[i];
      }
    }
    return keyWord;
    
    
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
