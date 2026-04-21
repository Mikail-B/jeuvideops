import assert from 'assert';

// Les fonctions du jeu sont copiées ici pour les tester sans DOM
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
  if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
    return false;
  }
  return true;
}

function circleIntersect(x1, y1, r1, x2, y2, r2) {
  const squareDistance = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
  return squareDistance <= ((r1 + r2) * (r1 + r2));
}

function timeToString(time) {
  const diffInHrs = time / 3600000;
  const hh = Math.floor(diffInHrs);
  const diffInMin = (diffInHrs - hh) * 60;
  const mm = Math.floor(diffInMin);
  const diffInSec = (diffInMin - mm) * 60;
  const ss = Math.floor(diffInSec);
  const diffInMs = (diffInSec - ss) * 100;
  const ms = Math.floor(diffInMs);
  const formattedMM = mm.toString().padStart(2, '0');
  const formattedSS = ss.toString().padStart(2, '0');
  const formattedMS = ms.toString().padStart(2, '0');
  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Tests fournis par le sujet
describe('getRandomInt', () => {
  it('getRandomInt(-42, 42) < 43 returns true', () => {
    assert.equal(getRandomInt(-42, 42) < 43, true);
  });
  it('getRandomInt(42, 42) returns 42', () => {
    assert.equal(getRandomInt(42, 42), 42);
  });
});

describe('rectIntersect', () => {
  it('rectIntersect(1,1,2,1,4,1,1,2) returns false', () => {
    assert.equal(rectIntersect(1, 1, 2, 1, 4, 1, 1, 2), false);
  });
  it('rectIntersect(1,1,5,2,4,1,1,2) returns true', () => {
    assert.equal(rectIntersect(1, 1, 5, 2, 4, 1, 1, 2), true);
  });
});

describe('circleIntersect', () => {
  it('circleIntersect(3,2,1,6,1,1.5) returns false', () => {
    assert.equal(circleIntersect(3, 2, 1, 6, 1, 1.5), false);
  });
  it('circleIntersect(3,2,1,3,-2,4) returns true', () => {
    assert.equal(circleIntersect(3, 2, 1, 3, -2, 4), true);
  });
});

describe('timeToString', () => {
  it('timeToString(123456789) returns "17:36:78"', () => {
    assert.equal(timeToString(123456789), '17:36:78');
  });
  it('timeToString("toto") returns "NaN:NaN:NaN"', () => {
    assert.equal(timeToString('toto'), 'NaN:NaN:NaN');
  });
});

// Tests supplémentaires
describe('getRandomInt extra', () => {
  it('getRandomInt(0, 0) returns 0', () => {
    assert.equal(getRandomInt(0, 0), 0);
  });
  it('getRandomInt(1, 10) is between 1 and 10', () => {
    const result = getRandomInt(1, 10);
    assert.equal(result >= 1 && result <= 10, true);
  });
  it('getRandomInt(5, 5) returns 5', () => {
    assert.equal(getRandomInt(5, 5), 5);
  });
});

describe('rectIntersect extra', () => {
  it('rectIntersect(0,0,10,10,5,5,10,10) returns true', () => {
    assert.equal(rectIntersect(0, 0, 10, 10, 5, 5, 10, 10), true);
  });
  it('rectIntersect(0,0,1,1,10,10,1,1) returns false', () => {
    assert.equal(rectIntersect(0, 0, 1, 1, 10, 10, 1, 1), false);
  });
});
