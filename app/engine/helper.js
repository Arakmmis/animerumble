function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function energy(amount = 3) {  
  let arr = ["a", "a", "a", "s", "s", "s", "i", "i", "i", "w", "w", "w"];
  let energy = shuffle(arr).splice(0, amount);  
  console.log(energy);
  return {
    a: energy.reduce((a, b) => (b == "a" ? a + 1 : a), 0),
    i: energy.reduce((a, b) => (b == "i" ? a + 1 : a), 0),
    s: energy.reduce((a, b) => (b == "s" ? a + 1 : a), 0),
    w: energy.reduce((a, b) => (b == "w" ? a + 1 : a), 0)
  };
}

function stealEnergy(en) {
  let arr = [
    { e: en.a, n: "a" },
    { e: en.i, n: "i" },
    { e: en.s, n: "s" },
    { e: en.w, n: "w" }
  ].filter(x => x.e > 0);
  if (arr.length !== 0) {
    let energy = shuffle(arr).splice(0, 1);
    return energy[0].n;
  } else {
    return false;
  }
}

module.exports = {
  energy,
  stealEnergy
};
