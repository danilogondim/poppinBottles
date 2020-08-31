const { assert } = require('chai');
const { totalBottles } = require('../poppinBottles');


describe('#totalBottles', () => {
  it("returns { investment: 10, totalBottles: 15, capsLeft: 3, emptyBottles: 1, bottlesEarnedByCaps: 3, bottlesEarnedByBottles: 7 } for 10", () => {
    const actual = totalBottles(10);
    const expected = { investment: 10, totalBottles: 15, capsLeft: 3, emptyBottles: 1, bottlesEarnedByCaps: 3, bottlesEarnedByBottles: 7 };
    assert.deepEqual(actual, expected);
  });
  it("returns { investment: 20, totalBottles: 35, capsLeft: 3, emptyBottles: 1, bottlesEarnedByCaps: 8, bottlesEarnedByBottles: 17 } for 20", () => {
    const actual = totalBottles(20);
    const expected = { investment: 20, totalBottles: 35, capsLeft: 3, emptyBottles: 1, bottlesEarnedByCaps: 8, bottlesEarnedByBottles: 17 };
    assert.deepEqual(actual, expected);
  });
  it("returns { investment: 30, totalBottles: 55, capsLeft: 3, emptyBottles: 1, bottlesEarnedByCaps: 13, bottlesEarnedByBottles: 27 } for 30", () => {
    const actual = totalBottles(30);
    const expected = { investment: 30, totalBottles: 55, capsLeft: 3, emptyBottles: 1, bottlesEarnedByCaps: 13, bottlesEarnedByBottles: 27 };
    assert.deepEqual(actual, expected);
  });
  it("returns { investment: 40, totalBottles: 75, capsLeft: 3, emptyBottles: 1, bottlesEarnedByCaps: 18, bottlesEarnedByBottles: 37 } for 40", () => {
    const actual = totalBottles(40);
    const expected = { investment: 40, totalBottles: 75, capsLeft: 3, emptyBottles: 1, bottlesEarnedByCaps: 18, bottlesEarnedByBottles: 37 };
    assert.deepEqual(actual, expected);
  });
});