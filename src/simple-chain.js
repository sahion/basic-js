const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  length : 0,
  chain : [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.length++;
    this.chain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if (typeof position != 'number'|| !Number.isInteger(position) ||  position>this.length || position<1){ 
      this.length = 0;
      this.chain = [];
      throw Error("You can't remove incorrect link!");}
    this.length--;
    this.chain.splice(position-1,1);
    return chainMaker;
  },
  reverseChain() {
    let reversedChain = [];
    for (let i=this.chain.length-1;i>=0;i--){
      reversedChain.push(this.chain[i]);
    }
    this.chain = reversedChain;
    return chainMaker;
  },
  finishChain() {
    let chainStr = [];
    for (let i in this.chain){
      chainStr.push(this.chain[i]+'');
    }
    this.chain = [];
    this.length = 0;
    return '( ' + chainStr.join(' )~~( ') + ' )';
  }


};
module.exports = {
  chainMaker
};
