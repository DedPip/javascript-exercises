const repeatString = function(string, num) {
  stringSum = '';
  if (num < 0) {
    return "ERROR";
  }
  else if (string === '') {
    return '';
  }
  else {
    for (i = 0; i < num; i++) {
      stringSum += string;
    }
    return stringSum
  }
};

// Do not edit below this line
module.exports = repeatString;
