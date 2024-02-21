const roundToOneDecimalPlace = num => Math.round(num * 10) / 10;

const convertToCelsius = function (tempInFahrenheit) {
  const tempInCelsius = (tempInFahrenheit - 32) * 5 / 9
  return roundToOneDecimalPlace(tempInCelsius);
};

const convertToFahrenheit = function (tempInCelsius) {
  const tempInFahrenheit = tempInCelsius * 9 / 5 + 32;
  return roundToOneDecimalPlace(tempInFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
