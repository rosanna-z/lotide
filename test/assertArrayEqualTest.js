const _ = require('../index');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns 'Assertion Passed' for [1, 2], [1, 2]", () => {
    assert.strictEqual(_.assertArraysEqual([1, 2], [1, 2]), true);
  });
  it("returns 'Assertion Failed' for [1, 2], [3, 2]", () => {
    assert.strictEqual(_.assertArraysEqual([1, 2], [3, 2]), false);
  });
    it("returns 'Assertion Passed' for ['1', '2'], ['1', '2']", () => {
    assert.strictEqual(_.assertArraysEqual(['1', '2'], ['1', '2']), true);
  });
    it("returns 'Assertion Failed for ['1', '2', '3'], ['1', '2', 3]'", () => {
    assert.strictEqual(_.assertArraysEqual(['1', '2', '3'], ['1', '2', 3]), false);
  });
});

