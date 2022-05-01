const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let s1Array = Array.from(s1);
  let s2Array = Array.from(s2);

  for (let i=0;i<s1Array.length;i++){
    for (let j=0;j<s2Array.length;j++){
      if (s2Array[j] == s1Array[i]){
        counter++;
        s1Array.splice(i,1);
        s2Array.splice(j,1);
        i--;
        j--;
      }
        }
  }
  return counter;
  }

module.exports = {
  getCommonCharacterCount
};
