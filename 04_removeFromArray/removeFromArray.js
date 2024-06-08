const removeFromArray = function (array, ...toRemove) {
  return array.filter((item) => !toRemove.some((element) => item === element));
};

// Do not edit below this line
module.exports = removeFromArray;
