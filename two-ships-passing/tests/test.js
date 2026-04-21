import assert from 'assert';
import {lerp, mapLinear, randFloatSpread} from '../src/math.js';
// import { describe, it } de 'mocha';

describe('math', () => {
  // randFloatSpread(range) = Math.random() * range - range / 2
  describe('randFloatSpread', () => {
    it('randFloatSpread(1) <= 1 returns true', () => {
      assert.equal(randFloatSpread(1) <= 1, true);
    });
    it('randFloatSpread(1) >= -1 returns true', () => {
      assert.equal(randFloatSpread(1) >= -1, true);
    });
    it('randFloatSpread(10) <= 10 returns true', () => {
      assert.equal(randFloatSpread(10) <= 10, true);
    });
  });
});
// mapLinear(x, a1, a2, b1, b2) = b1 + (x - a1) * (b2 - b1) / (a2 - a1)
describe('mapLinear', () => {
  it('mapLinear(1, 2, 3, 4, 5) should return 3', () => {
    assert.equal(mapLinear(1, 2, 3, 4, 5), 3);
  });
  it('mapLinear(1,20,3,40,5) returns 0.882352941176471', () => {
    assert.equal(mapLinear(1, 20, 3, 40, 5), 0.882352941176471);
  });
  it('mapLinear(1, 10, 5, 20, 15) returns 11', () => {
    assert.equal(mapLinear(1, 10, 5, 20, 15), 11);
  });
  it('mapLinear(0, 0, 10, 0, 100) returns 0', () => {
    assert.equal(mapLinear(0, 0, 10, 0, 100), 0);
  });
});
// lerp(a, b, t) = a + (b - a) * t
describe('lerp', () => {
  it('lerp(1,3,20) returns 41', () => {
    assert.equal(lerp(1, 3, 20), 41);
  });
  it('lerp(1.3,-7,2) returns -15.3', () => {
    assert.equal(lerp(1.3, -7, 2), -15.3);
  });
  it('lerp(0, 10, 0.5) returns 5', () => {
    assert.equal(lerp(0, 10, 0.5), 5);
  });
  it('lerp(10, 20, 0.25) returns 12.5', () => {
    assert.equal(lerp(10, 20, 0.25), 12.5);
  });
});
