const _ = require('../index');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = _.tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = _.tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = _.tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });

  it("returns 2 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = _.tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.strictEqual(words.length, 2);
  });
  it("returns 24 for [23, 24, 25]", () => {
    const caseTwo = _.tail([23, 24, 25]);
    assert.strictEqual(caseTwo[0], 24);
  });

});