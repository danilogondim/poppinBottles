// 120 min so far

// a function to call every time we have spare caps to trade for a new bottle;
const capsForBottles = obj => {
  obj.totalBottles += Math.floor(obj.capsLeft / 4);
  obj.emptyBottles += Math.floor(obj.capsLeft / 4);
  obj.capsLeft -= Math.floor(obj.capsLeft / 4) * 4 - Math.floor(obj.capsLeft / 4);
  return obj;
};

// a function to be call every time we have spare empty bottles to trade for a new bottle;
const bottlesForBottles = obj => {
  obj.totalBottles += Math.floor(obj.emptyBottles / 2);
  obj.capsLeft += Math.floor(obj.emptyBottles / 2);
  obj.emptyBottles -= Math.floor(obj.emptyBottles / 2) * 2 - Math.floor(obj.emptyBottles / 2);
  return obj;
};

const totalBottles = (investment, output = {}) => {
  // if it is the first time we run our fc, we need to define the output object
  if (investment && output.totalBottles === undefined) {
    output.totalBottles = Math.floor(investment / 2);
    output.capsLeft = output.totalBottles;
    output.emptyBottles = output.totalBottles;
  }
  // base case: if I can't trade caps or bottles for new bottles
  if (output.capsLeft < 4 && output.emptyBottles < 2) {
    return output.totalBottles;
  }
  // recursive case: if I can trade either caps or bottles for new bottles:

  if (output.capsLeft >= 4) {
    capsForBottles(output);
  }

  if (output.emptyBottles >= 2) {
    bottlesForBottles(output);
  }

  if (output.capsLeft >= 4 || output.emptyBottles >= 2) {
    totalBottles(null, output);
  }

  return output.totalBottles;

};

module.exports = { totalBottles };