let constructor = require("../constructor.js");

function pushStatus(package, type = "normal") {
  //Define
  let subject = package.subject;
  let onStatus = package.onStatus;
  let status = package.status;
  let inherit = package.inherit;
  let skillIndex = package.skillIndex;

  //Abbreviate
  let store = subject.status[onStatus];

  if (type === "stack") {
    let exist = store.findIndex(
      x => x.type === status.type && x.name === inherit.name
    );
    if (exist > -1) {
      store[exist].stack += 1;
    } else {
      store.push(new constructor.status(status, inherit, skillIndex));
    }
  } else if (type === "replace") {
    let exist = store.some(
      x => x.type === status.type && x.name === inherit.name
    );
    if (exist) {
      store = store.filter(
        x => x.type !== status.type && x.name !== inherit.name
      );
    }
    store.push(new constructor.status(status, inherit, skillIndex));
  } else if (type === "normal" || type === undefined) {
    store.push(new constructor.status(status, inherit, skillIndex));
  }
  console.log('statuspush', type)
}

function removeStatus(package, type = "all") {
  //Define
  let subject = package.subject;

  if (type === "all") {
    subject.status.onAttack = [];
    subject.status.onReceive = [];
    subject.status.onSelf = [];
    subject.status.onState = [];
  } else if (type === "harmful") {
    //Remove Harmful
    subject.status.onAttack = subject.status.onAttack.filter(
      x => x.harmful === false
    );
    subject.status.onReceive = subject.status.onReceive.filter(
      x => x.harmful === false
    );
    subject.status.onSelf = subject.status.onSelf.filter(
      x => x.harmful === false
    );
    subject.status.onState = subject.status.onState.filter(
      x => x.harmful === false
    );
  }
}

function damage(package) {
  let subject = package.subject;
  let val = package.val;

  subject.hp -= val;
}

module.exports = {
  pushStatus,
  damage,
  removeStatus
};
