const removeFromArray = function(array, ...theArgs) {
  let subtracted = [];
  for (i = 0; i < array.length; i++)
    if (!theArgs.includes(array[i])) {
      subtracted.push(array[i]);
    }
    return subtracted;
};

// Do not edit below this line
module.exports = removeFromArray;
