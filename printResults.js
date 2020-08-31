const printResults = obj => {
  const purchasedBottles = Math.floor(obj.investment / 2);
  console.log(`Investment made: $${obj.investment}`);
  console.log(`Purchased bottles: ${purchasedBottles}`);
  console.log(`Earned bottles: ${obj.totalBottles - purchasedBottles}`);
  console.log(`Total bottles: ${obj.totalBottles}`);
  console.log('-----------------------');
  console.log(`Bottles earned by trading bottles: ${obj.bottlesEarnedByBottles}`);
  console.log(`Remaining bottles: ${obj.emptyBottles}`);
  console.log(`Bottles earned by trading caps: ${obj.bottlesEarnedByCaps}`);
  console.log(`Remaining caps: ${obj.capsLeft}`);
};

module.exports = { printResults };