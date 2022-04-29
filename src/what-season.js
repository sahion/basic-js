const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {return 'Unable to determine the time of year!'}
  if (!(date instanceof Date ) || Object.keys(date).length>0) {throw Error('Invalid date!');}
  let month = date.getMonth();
  let result;

  switch (month){
    case 11:
    case 0:
    case 1:
      result = "winter";
      break;
    
    case 2:
    case 3:
    case 4:
      result = "spring";
      break;

    case 5:
    case 6:
    case 7:
      result = "summer";
      break;

    case 8:
    case 9:
    case 10:
      result = "autumn";
      break;
  }

  return result;


}

module.exports = {
  getSeason
};
