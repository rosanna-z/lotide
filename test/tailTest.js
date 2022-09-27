const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });

  it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3);
  });
  it("returns 24 for [23, 24, 25]", () => {
    const caseTwo = tail([23, 24, 25]);
    assert.strictEqual(caseTwo[0], 24);
  });

});