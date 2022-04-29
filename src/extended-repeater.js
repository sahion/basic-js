const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str,options) {
  resultSTR = '';
  times = 1;
    if (!options.repeatTimes) {options.repeatTimes=1}
    if (!options.additionRepeatTimes && options.addition) {options.additionRepeatTimes=1}
  for (let i=0;i<options.repeatTimes;i++){
    resultSTR+=str;
    for (let j=0; j < options.additionRepeatTimes; j++){
      resultSTR+=options.addition;
     if (j<options.additionRepeatTimes-1) {resultSTR+=(options.additionSeparator)? options.additionSeparator : '|';};
    }
    if (i<options.repeatTimes-1) {resultSTR+= (options.separator)? options.separator: '+';};
  }

  return resultSTR;
}

module.exports = {
  repeater
};
