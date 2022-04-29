const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct){
    this.direct = (direct == false)? false : true;
  }
   encoder = new TextEncoder();
   decoder = new TextDecoder();
   result = '';
  encrypt(message,code) {
    if (!message || !code) {throw Error('Incorrect arguments!')}
    let messageUTF = this.encoder.encode(message.toUpperCase());
    let codeUTF = this.encoder.encode(code.toUpperCase());
    let codeCounter = 0;
    for (let i in messageUTF){
      if(messageUTF[i] > 64 && messageUTF[i]<91) {
        messageUTF[i]+=codeUTF[codeCounter]-65;
        if (messageUTF[i]>90) {messageUTF[i]-=26};
        codeCounter++;
        if (codeCounter==codeUTF.length){codeCounter=0;}
      }
    }
    let messageDecoded = this.decoder.decode(messageUTF);
    if (!this.direct){
      for (let i=messageDecoded.length-1; i>=0; i-- ){
        this.result+=messageDecoded[i];
      }
      messageDecoded=this.result;
    }
    this.result='';
    return messageDecoded;
  }
  decrypt(message,code) {
    if (!message || !code) {throw Error('Incorrect arguments!')}
    let messageUTF = this.encoder.encode(message.toUpperCase());
    let codeUTF = this.encoder.encode(code.toUpperCase());
    let codeCounter = 0;
    for (let i in messageUTF){
      if(messageUTF[i] > 64 && messageUTF[i]<91) {
        messageUTF[i]-=codeUTF[codeCounter]-65;
        if (messageUTF[i]<65) {messageUTF[i]+=26};
        ++codeCounter;
        if (codeCounter==codeUTF.length){codeCounter=0;}
      }
    }
    let messageDecoded = this.decoder.decode(messageUTF);
    if (!this.direct){
      for (let i=messageDecoded.length-1; i>=0; i-- ){
        this.result+=messageDecoded[i];
      }
      messageDecoded=this.result;
    }
    this.result='';
    return messageDecoded
  }
}

module.exports = {
  VigenereCipheringMachine
};
