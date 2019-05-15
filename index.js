const unique = arr => arr.filter((el, pos, arr) => {
  return arr.indexOf(el) == pos;
})

const between = (min, max, length = 1) => {
  let arr = [];
  for (let i = 0; i < length; ++i) {
    arr = [...arr, Math.floor(Math.random() * (max - min) + min)];
  }
  return arr;
}

const random = (max, length = 1) => {
  let arr = [];
  for (let i = 0; i < length; ++i) {
    arr = [...arr, Math.floor(Math.random() * Math.floor(max))]
  }
  return arr;
}

/**
 *
 * @param {number} numbers - total of numbers to return
 * @param {number} max - maximum value of biggest number
 * @param {number} min - minimum value of smallest number
 * @param {number} length - set length to pick the numbers from
 *
 * @example
 * picks 7 random numbers out of a set with 100 random numbers
 * ```js
 * lottery(100, 7)
 * ```
 *
 * @example
 * picks 7 random numbers out of a set with 500 random numbers
 * ```js
 * lottery(100, 7, 500)
 * ```
 */
const lottery = (numbers = 7, max = 100, min = 0, length = 100) => {
  let arr = [];
  let ran = between(min, max, length);
  ran = unique(ran);
  for (let i = 0; i < numbers; i++) {
    let _ran = between(min, max, ran.length)[0] - min;
    if (_ran > ran.length - 1) _ran -= 1;
    arr = [...arr, ran[_ran]];
  }
  return arr;
}

module.exports = {
  between,
  random,
  lottery
}
