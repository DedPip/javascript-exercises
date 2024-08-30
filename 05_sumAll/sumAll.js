const sumAll = function(a, b) {
  let sum = 0;
  let bigger = 0;
  let smaller = 0;
  if (typeof a === 'number' && typeof b === 'number' && a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
    if (a > b) {bigger = a; smaller = b}
    else if (a < b) {bigger = b; smaller = a;}
    else {bigger = a; smaller = b;}
    for (i = smaller; i <= bigger; i++) {
      sum += i;
    }
    return sum;
  } else {return 'ERROR'}
};

// Do not edit below this line
module.exports = sumAll;
