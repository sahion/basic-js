const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  let str = n+'';
  for (let i=0;i<str.length;i++){
    let newNum = +(str.slice(0,i)+str.slice(i+1,str.length));
    if (newNum>maxNumber){
      maxNumber = newNum;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
