const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let current;
  let counter = 0;
  for (i in str){

    current = (current) ? current : str[i];


    if (str[i] == current && str.length-1!=i){
      counter++;
    } else {
      if (str.length-1==i && str[i] == current) {counter++};
      if (counter > 1){
        result += counter;
      }
      result += current;
      if (str.length-1==i && str[i] != current){
        result+=str[i];
      }
      current = str[i];
      counter = 1;
      
    }
  }
  
  return result;
}

module.exports = {
  encodeLine
};
