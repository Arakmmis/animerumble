function indicateTurn(state) {
  return {
    myTurn: state.turn % 2 === 1 ? "teamOdd" : "teamEven",
    theirTurn: state.turn % 2 === 0 ? "teamOdd" : "teamEven"
  };
}

module.exports = indicateTurn;
