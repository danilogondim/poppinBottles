// 120 min so far

const investment = process.argv[2];
const { capsForBottles } = require('./capsForBottles');
const { bottlesForBottles } = require('./bottlesForBottles');
const { printResults } = require('./printResults');

const totalBottles = (investment, output = {}) => {
  // if it is the first time we run our fc, we need to define the output object
  if (investment && output.totalBottles === undefined) {
    output.investment = investment;
    output.totalBottles = Math.floor(investment / 2);
    output.capsLeft = output.totalBottles;
    output.emptyBottles = output.totalBottles;
    output.bottlesEarnedByCaps = 0;
    output.bottlesEarnedByBottles = 0;
  }
  // base case: trade the actual caps or bottles for new bottles and then if I am unable to do a second trade, return the totalBottles
  if (output.capsLeft >= 4) {
    capsForBottles(output);
  }
  if (output.emptyBottles >= 2) {
    bottlesForBottles(output);
  }
  if (output.capsLeft < 4 && output.emptyBottles < 2) {
    return output;
  }

  // recursive case: if I can do a second trade of either caps or bottles for new bottles:
  if (output.capsLeft >= 4 || output.emptyBottles >= 2) {
    totalBottles(null, output);
  }

  return output;
};

printResults(totalBottles(investment));

module.exports = { totalBottles };