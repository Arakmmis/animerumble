const _ = require("lodash");

function stun(onState, skill) {
  let stun = onState.map(x => {
    if (x.type === "stun") {
      let ignore = ignoreManagement(onState, x);
      let intersect = _.intersection(x.classes, skill.classes);

      let evaluate;

      if (x.info === "inclusive") {
        evaluate = intersect.length > 0 ? true : false;
      } else if (x.info === "declusive") {
        evaluate = intersect.length === 0 ? true : false;
      }

      if (evaluate && !ignore) {
        return true;
      } else {
        return false;
      }
    }
  });

  if (stun.filter(x => x === true).length > 0) {
    return true;
  } else {
    return false;
  }
}

function invulnerable(onState, skill) {
  let invulnerable = onState.map(x => {
    if (x.type === "invulnerable") {
      let ignoreInvul = skill.ignoreInvul;
      let intersect = _.intersection(x.classes, skill.classes);

      let evaluate;

      if (x.info === "inclusive") {
        evaluate = intersect.length > 0 ? true : false;
      } else if (x.info === "declusive") {
        evaluate = intersect.length === 0 ? true : false;
      }

      if (evaluate && !ignoreInvul) {
        return true;
      } else {
        return false;
      }
    }
  });

  if (invulnerable.filter(x => x === true).length > 0) {
    return true;
  } else {
    return false;
  }
}

function ignore(onState, skill) {
  let ignore = onState.map(x => {
    if (x.type === "ignore") {
      let intersect = _.intersection(x.classes, skill.classes);

      let evaluate;

      if (x.info === "inclusive") {
        evaluate = intersect.length > 0 ? true : false;
      } else if (x.info === "declusive") {
        evaluate = intersect.length === 0 ? true : false;
      }

      if (evaluate) {
        return true;
      } else {
        return false;
      }
    }
  });

  if (ignore.filter(x => x === true).length > 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  stun,
  invulnerable,
  ignore
};
