const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))){throw Error("'arr' parameter must be an instance of the Array!")}
  if (!arr) {return false}
  
  let resultArr = [];
  let next = false;
  let operation = '';
  
  for (let i in arr){
    

    resultArr.push(arr[i]);

    if (typeof arr[i] != 'string'){}
    else if ((arr[i].slice(arr[i].length-4,arr[i].length) == 'prev' || arr[i].slice(arr[i].length-4,arr[i].length) == 'next' ) && ((arr[i].slice(2,9) == 'discard') || (arr[i].slice(2,9) == 'double-')) ) {
      resultArr.pop();
    }


    if (typeof arr[i] != 'string'){}
    else if (arr[i].slice(arr[i].length-4,arr[i].length) == 'prev' && ((arr[i].slice(2,9) == 'discard') || (arr[i].slice(2,9) == 'double-'))) {
      
      operation = arr[i].slice(2,9);
      if (operation == 'discard' && resultArr[resultArr.length-1]==arr[i-1]){resultArr.pop()}
        else if (operation == 'double-' && i>0 && resultArr[resultArr.length-1]==arr[i-1]) {resultArr.push(arr[i-1]);}
  }


  




      if (next){
        if (operation == 'discard'){resultArr.pop()}
        else if (operation == 'double-' ) {resultArr.push(arr[i]);}
        next = false;
      }



      if (typeof arr[i] != 'string'){}
      else if (arr[i].slice(arr[i].length-4,arr[i].length) == 'next' && ((arr[i].slice(2,9) == 'discard') || (arr[i].slice(2,9) == 'double-'))) {
        next=true;
        operation = arr[i].slice(2,9);
    } 
      
  }

  return resultArr;
}

module.exports = {
  transform
};
