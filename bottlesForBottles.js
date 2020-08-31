// a function to be call every time we have spare empty bottles to trade for a new bottle;
const bottlesForBottles = obj => {
  const newBottles = Math.floor(obj.emptyBottles / 2);
  obj.totalBottles += newBottles;
  obj.capsLeft += newBottles;
  obj.emptyBottles -= newBottles * 2 - newBottles;
  obj.bottlesEarnedByBottles += newBottles;
  return obj;
};

module.exports = { bottlesForBottles };