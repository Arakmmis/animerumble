function vueBind(payload) {
  let username = getCookie("username");
  console.log(payload);
  let ally = payload.team.teamEven === username ? "teamEven" : "teamOdd";
  let enemy = payload.team.teamEven === username ? "teamOdd" : "teamEven";
  let turnVal = ally === "teamEven" ? 0 : 1;
  let myTurn = payload.turn % 2 === turnVal ? true : false;

  if (payload.team.teamEven !== username && payload.team.teamOdd !== username) {
    console.log("spectate");
    app.mode = "spectate";
    myTurn = false;
    // return;
  }

  if (myTurn === true) {
    app.$refs.soundStartTurn.play();
  }

  //Time
  let timeDiff = (Date.now() - payload.timestamp) / 1000;
  let timeCalc = Math.floor(60 - timeDiff);
  let remaining = 100 * (timeCalc / 60);
  console.log(payload.timestamp, timeDiff, timeCalc, remaining);

  if (remaining < 0) {
    remaining = 0;
  }
  app.state.timer.turn = remaining;

  // if (payload.winner.state === true && payload.winner.name === username) {
  // } else if (
  //   payload.winner.state === true &&
  //   payload.winner.name !== username
  // ) {
  //   app.$refs.soundLose.play();
  // }

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
  console.log(store);
  let button = {
    ally: store.ally.map(x => {
      // let disabled = x.status.onState.findIndex(x => x.type === 'stun') > -1 || x.hp <= 0 ? true : false
      let disabled = x.hp <= 0 ? true : false;
      // let stun = x.status.onState.some(x => x.type === "stun") ? true : false;
      return {
        name: x.name,
        button: true,
        onSkill: false,
        disabled: disabled,
        skill: x.skill.map(s => {
          // console.log(s.type);
          let energy = energyManagement(
            { energy: store.energy.ally, skillBind: s.energy },
            "check"
          );
          let stun = stunManagement(x.status.onState, s);
          // let disableDrVr =
          //   s.type === "invulnerable" &&
          //   x.status.onState.some(x => x.type === "disableDrIv")
          //     ? true
          //     : false;
          let disabled =
            stun ||
            s.required ||
            s.state === "cooldown" ||
            myTurn === false ||
            x.hp <= 0
              ? true
              : false;
          return {
            name: s.name,
            disabled: disabled,
            button: disabled || energy ? true : false
          };
        })
      };
    }),
    enemy: store.enemy.map((x, i) => {
      // let disabled =
      //   x.status.onState.some(x => x.type === "invulnerable") || x.hp <= 0
      //     ? true
      //     : false;
      let disabled = x.hp <= 0 ? true : false;
      return {
        name: x.name,
        index: i,
        disabled: disabled,
        button: true
      };
    })
  };

  app.source = store;
  app.state.button = button;
  app.state.winner = payload.winner;
  app.state.exchange.modal = false;
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
  status = status.filter(
    x =>
      x.isInvisible === false ||
      (x.isInvisible !== false && Number(x.nameId.slice(-1)) === turnVal)
  );
  // if (turnVal === Number(name.slice(-1))) {
  //   status = status.filter(
  //     x => x.isInvisible === false || x.isInvisible !== false && Number(x.nameId.slice(-1)) === turnVal
  //   );
  // } else {
  //   status = status.filter(
  //     x => x.isInvisible === false || x.isInvisible !== false && Number(x.nameId.slice(-1)) === turnVal
  //   );
  // }
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
