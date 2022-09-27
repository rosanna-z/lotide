const assert = require('chai').assert;
const _ = require('../index');

describe("#assertEqual", () => {
  it("returns assertion fail for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.strictEqual(_.assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it("returns assertion pass for (1, 1)", () => {
    assert.strictEqual(_.assertEqual(1, 1), true);
  });
  it("returns assertion fail for 'car' and 'dog'", () => {
    assert.strictEqual(_.assertEqual("car", "dog"), false);
  });
});

