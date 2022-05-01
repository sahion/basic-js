const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrCopy = [...arr];
  let position = 0;
  let arrWithoutMinus1 = arrCopy.filter(el => el!=-1);
  arrWithoutMinus1.sort((a,b) => a-b);
  for (let i in arrCopy){
    if (arrCopy[i]!=-1){
      arrCopy[i] = arrWithoutMinus1[position++];
    }
  }
  return arrCopy;
}

module.exports = {
  sortByHeight
};
