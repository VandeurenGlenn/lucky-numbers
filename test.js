const {lottery} = require('./index');

let results = []


for (let i = 0; i < 100000; i++) {
  results.push(lottery(6, 9))
}

const winning = lottery(6, 9)

results = results.reduce((p, c) => {
  if (winning[0] === c[0] &&
      winning[1] === c[1] &&
      winning[2] === c[2] &&
      winning[3] === c[3] &&
      winning[4] === c[4] &&
      winning[5] === c[5]) {
    p[6] += 1
  }

  if (winning[0] === c[0] &&
      winning[1] === c[1] &&
      winning[2] === c[2] &&
      winning[3] === c[3] &&
      winning[4] === c[4] &&
      winning[5] !== c[5]) {
    p[5] += 1
  }

  if (winning[0] === c[0] &&
      winning[1] === c[1] &&
      winning[2] === c[2] &&
      winning[3] === c[3] &&
      winning[4] !== c[4] &&
      winning[5] !== c[5]) {
    p[4] += 1
  }

  if (winning[0] === c[0] &&
      winning[1] === c[1] &&
      winning[2] === c[2] &&
      winning[3] !== c[3] &&
      winning[4] !== c[4] &&
      winning[5] !== c[5]) {
    p[3] += 1
  }

  if (winning[0] === c[0] &&
      winning[1] === c[1] &&
      winning[2] !== c[2] &&
      winning[3] !== c[3] &&
      winning[4] !== c[4] &&
      winning[5] !== c[5]) {
    p[2] += 1
  }

  if (winning[0] === c[0] &&
      winning[1] !== c[1] &&
      winning[2] !== c[2] &&
      winning[3] !== c[3] &&
      winning[4] !== c[4] &&
      winning[5] !== c[5]) {
    p[1] += 1
  }

  // if (winning[0] !== c[0] &&
  //     winning[1] !== c[1] &&
  //     winning[2] !== c[2] &&
  //     winning[3] !== c[3] &&
  //     winning[4] !== c[4] &&
  //     winning[5] !== c[5]) {
  //   p[0].push(c)
  // }

  return p
}, {
  // 0: [],
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
})

console.log(results);
