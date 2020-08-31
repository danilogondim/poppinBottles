// a function to call every time we have spare caps to trade for a new bottle;
const capsForBottles = obj => {
  const newBottles = Math.floor(obj.capsLeft / 4);
  obj.totalBottles += newBottles;
  obj.emptyBottles += newBottles;
  obj.capsLeft -= newBottles * 4 - newBottles;
  obj.bottlesEarnedByCaps += newBottles;
  return obj;
};

module.exports = { capsForBottles };