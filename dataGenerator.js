data = [];
alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (var i = 0; i < alpha.length; i++) {

  function rand() {
    return (Math.floor(Math.random() * 30 + 10)) * 100;
  }

  data.push({
    "name": alpha[i],
    "num": i,
    "distance": rand()
  })
}

console.log(data);