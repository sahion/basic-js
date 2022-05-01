const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  result = {};
  for(let domain of domains){
    let previousDot;
    let dns;
    for (let i=domain.length-1;i>=0;i--){
      if (domain[i] == '.'){
        if (previousDot){
           dns += domain.slice(i,previousDot);
        }
        else{
           dns = domain.slice(i);
          
        }
        result[dns] = (result[dns]) ? result[dns]+1 : 1; 
        previousDot = i;
      }
    }
    dns += '.'+domain.slice(0,previousDot) ;
    result[dns] = (result[dns]) ? result[dns]+1 : 1;
  }
  return result;
}

module.exports = {
  getDNSStats
};
