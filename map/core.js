function multiplyBy10 (arr) {
  return arr.map(e => e*10);
}

function shiftRight (array) {;
  return array.map((e,i,originalArr) => {
    if (i === 0) {
      return originalArr[originalArr.length - 1];
    }
    else {
      return originalArr[i - 1];
    }
  })
};

function onlyVowels (array) {
  // let vowels = ['a','e','i','o','u','A','E','I','O','U'];
  return array.map((e) => {
    return e.replace(/[^aeiou]/gi,"");
  })
};

function doubleMatrix (array) {
  return array.map((arr) => {
    return arr.map((number) => {
      return number * 2
    });
  });
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
