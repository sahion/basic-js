const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  term = n%10;
  secondDigit = n;
  while (secondDigit>=10){
    secondDigit = Math.floor(secondDigit/10);
    term+=secondDigit%10;
  }
  if (term>=10){
    return getSumOfDigits(term);
  }
  return term;
  
}

module.exports = {
  getSumOfDigits
};
