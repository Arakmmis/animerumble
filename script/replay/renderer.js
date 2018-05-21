function vueBind(payload) {
  console.log(payload);
  let ally = "teamEven";
  let enemy = "teamOdd";
  let turnVal = ally === "teamEven" ? 0 : 1;
  let myTurn = payload.turn % 2 === turnVal ? true : false;

  //Time
  let timeDiff = (Date.now() - payload.timestamp) / 1000;
  let timeCalc = Math.floor(45 - timeDiff);
  let remaining = 100 * (timeCalc / 45);
  console.log(payload.timestamp, timeDiff, timeCalc, remaining);

  let store = {
    energy: {
      ally: payload.energy[ally],
      enemy: payload.energy[enemy]
    },
    ally: payload[ally].map(x => {
      return {
        ...x,
        skill:
          app.mode === "game" ? x.skill : x.skill.sort((a, b) => a.id - b.id),
        indicator: statusView(x.name, x.status, turnVal)
      };
    }),
    enemy: payload[enemy].map(x => {
      return {
        ...x,
        skill: x.skill.sort((a, b) => a.id - b.id),
        indicator: statusView(x.name, x.status, turnVal)
      };
    }),
    turn: payload.turn,
    myTurn: myTurn,
    turnVal: turnVal,
    room: payload.room,
    meta: {
      myName: payload.team[ally],
      theirName: payload.team[enemy]
    },
    timestamp: payload.timestamp
  };
  store.energy.ally.r =
    store.energy.ally.a +
    store.energy.ally.i +
    store.energy.ally.s +
    store.energy.ally.w;

  app.source = store;
  app.packet = payload.log;
  app.action.push(payload.log);
  // app.state.button = button;
  // app.state.winner = payload.winner;
  // app.state.exchange.modal = false;
}

function statusView(name, payload, turnVal) {
  console.log(name.slice(-1), payload);
  let status = _.concat(
    payload.onAttack,
    payload.onReceive,
    payload.onState,
    payload.onSelf
  );
  console.log("invisible", turnVal, name.slice(-1));
  // status = status.filter(
  //   x =>
  //     x.isInvisible === false ||
  //     (x.isInvisible !== false && Number(x.nameId.slice(-1)) === turnVal)
  // );
  let groupByNameId = _.groupBy(status, "nameId");
  let valuesByNameId = _.values(groupByNameId);
  let groupBySkillIndex = valuesByNameId.map(x => _.groupBy(x, "skillIndex"));
  let valuesBySkillIndex = _.values(groupBySkillIndex);
  let concatValues = [];
  valuesBySkillIndex.forEach(x => {
    concatValues = concatValues.concat(_.values(x));
  });
  let final = concatValues.map(x => {
    let info = x[0];
    return {
      name: info.name,
      nameId: info.nameId,
      skillIndex: info.skillIndex,
      active: info.active,
      val: x
    };
  });
  return final;
}

vueBind(app.log[0]);
