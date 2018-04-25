function statusIterator(package, source, callback) {
  source.forEach((x, i, a) => {
    x.modify(package);
    if (i === a.length - 1) {
      callback(package, source, callback);
    }
  });
}

function statusApply(payload, move, owner) {
  if (owner === "offense") {
    statusIterator(
      payload,
      payload.offense.status.onAttack,
      (payload, source, callback) => {
        console.log("test");
        if (payload.target.status.onReceive.length > 0) {
          statusIterator(
            payload,
            payload.target.status.onReceive,
            (payload, source, callback) => {
              move(payload);
            }
          );
        } else {
          move(payload);
        }
      }
    );
  } else {
    statusIterator(
      payload,
      payload.target.status.onReceive,
      (payload, source, callback) => {
        move(payload);
      }
    );
  }
}

module.exports = statusApply;
