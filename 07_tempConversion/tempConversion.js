const roundTo1Decimal = function(num) {
  const rounded = num.toFixed(1);
  return Number(rounded);
}

const convertToCelsius = function(tempInF) {
  const converted = (tempInF - 32) * (5/9)
  if (Number.isInteger(converted)) return converted
  else return roundTo1Decimal(converted);
};

const convertToFahrenheit = function(tempInC) {
  const converted = (tempInC * (9/5)) + 32;
  if (Number.isInteger(converted)) return converted
  else return roundTo1Decimal(converted);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
