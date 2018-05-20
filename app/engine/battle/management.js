const _ = require("lodash");

function stunManagement(onState, skill) {
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

function invulnerableManagement(onState, skill) {
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

function ignoreManagement(onState, skill) {
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

function counterManagement(onStatus, onState, package) {
  let skill = package.skill;
  let counter = onStatus.map(x => {
    if (x.type === "counter") {
      let ignore = ignoreManagement(onState, x);
      let intersect = _.intersection(x.classes, skill.classes);

      //Only Counter Harmful Skills
      let harmful = x.harmfulOnly;
      if (harmful) {
        if (skill.harmful === false) {
          return false;
        }
      }

      let evaluate;

      if (x.info === "inclusive") {
        evaluate = intersect.length > 0 ? true : false;
      } else if (x.info === "declusive") {
        evaluate = intersect.length === 0 ? true : false;
      }

      if (evaluate && x.usage === 0 && !ignore) {
        // if (x.usage === 0) {
        x.modify(package, x);
        x.isInvisible = false;
        x.usage += 1;
        // x.active = 1;
        // }

        return true;
      } else {
        return false;
      }
    }
  });

  if (counter.filter(x => x === true).length > 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  stun: stunManagement,
  invulnerable: invulnerableManagement,
  ignore: ignoreManagement,
  counter: counterManagement
};
