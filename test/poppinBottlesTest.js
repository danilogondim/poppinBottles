const { assert } = require('chai');
const { totalBottles } = require('../poppinBottles');


describe('#totalBottles', () => {
  it("returns 15 for 10", () => {
    const actual = totalBottles(10);
    assert.equal(actual, 15);
  });
  it("returns 35 for 20", () => {
    const actual = totalBottles(20);
    assert.equal(actual, 35);
  });
  it("returns 55 for 30", () => {
    const actual = totalBottles(30);
    assert.equal(actual, 55);
  });
  it("returns 75 for 40", () => {
    const actual = totalBottles(40);
    assert.equal(actual, 75);
  });
});