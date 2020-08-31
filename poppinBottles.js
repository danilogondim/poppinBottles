// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase
// 102 min so far

const totalBottles = investment => {
  const purchasedBottles = investment >= 2 ? Math.floor(investment / 2) : 0;
  const freeBottlesVsCaps = capsForBottles(purchasedBottles);
  const freeBottlesVsBottles = bottlesForBottles(purchasedBottles)
  const totalBottles = purchasedBottles + freeBottlesVsCaps + freeBottlesVsBottles
  console.log({ purchasedBottles, freeBottlesVsCaps, freeBottlesVsBottles, totalBottles })
  return totalBottles;
};

const capsForBottles = caps => {
  if (caps >= 4) {
    const freeBottlesVsCaps = Math.floor(caps / 4)
    const leftCaps = caps % 4;
    return freeBottlesVsCaps + capsForBottles(freeBottlesVsCaps + leftCaps);
  }
  return 0;
};

const bottlesForBottles = bottles => {
  if (bottles >= 2) {
    const freeBottlesVsBottles = Math.floor(bottles / 2);
    const leftBottles = bottles % 2;
    return freeBottlesVsBottles + bottlesForBottles(freeBottlesVsBottles + leftBottles);
  }
  return 0;
};

console.log(totalBottles(10)); // =>	15
// totalBottles(20); // =>	35
// totalBottles(30); // =>	55
// totalBottles(40); // =>	75
// console.log("result:", bottlesForBottles(10)); // => min 5
// console.log("result:", capsForBottles(10)); // => min 2



module.exports = { totalBottles };