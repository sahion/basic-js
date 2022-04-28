const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(args) {
  let sum = 0;
  if (Array.isArray(args[0])){
    for (i in args){
      sum+=countCats(args[i]);
    }
  } else if (args.length) {
    for (let el of args){
      if (el==='^^') ++sum;
    }
  }
  return sum;
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
