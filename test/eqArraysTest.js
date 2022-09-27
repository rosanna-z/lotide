const _ = require('../index');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for ['1', '2', '3'], [3, 2, 1]", () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], [3, 2, 1]), false);
  });
  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});

