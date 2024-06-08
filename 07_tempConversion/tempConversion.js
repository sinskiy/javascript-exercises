const convertToCelsius = function (temperature) {
  const inCelcius = ((temperature - 32) * 5) / 9;
  const rounded =
    inCelcius !== Math.floor(inCelcius)
      ? parseFloat(inCelcius.toFixed(1))
      : inCelcius;
  return rounded;
};

const convertToFahrenheit = function (temperature) {
  const inFahrenheit = (temperature * 9) / 5 + 32;
  const rounded =
    inFahrenheit !== Math.floor(inFahrenheit)
      ? parseFloat(inFahrenheit.toFixed(1))
      : inFahrenheit;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
