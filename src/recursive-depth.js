const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let previousDepth = 0;
    if (Array.isArray(arr)){
        depth++;
        for (let a of arr){
          let depthOfA = this.calculateDepth(a);
          previousDepth = (depthOfA>previousDepth) ? depthOfA : previousDepth;
        }

        depth+=previousDepth;

    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
