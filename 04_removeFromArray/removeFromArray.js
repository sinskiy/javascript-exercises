const removeFromArray = function (array, ...toRemove) {
  return array.filter((item) => toRemove.every((element) => item !== element));
};

// Do not edit below this line
module.exports = removeFromArray;
