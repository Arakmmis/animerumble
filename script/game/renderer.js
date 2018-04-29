function vueBind(payload) {
  let username = getCookie("username");
  if (payload.team.teamEven !== username && payload.team.teamOdd !== username) {
    console.log(payload.team);
    return;
  }
  // console.log(payload);
  let ally = payload.team.teamEven === username ? "teamEven" : "teamOdd";
  let enemy = payload.team.teamEven === username ? "teamOdd" : "teamEven";
  let turn = ally === "teamEven" ? 1 : 0;
  let myTurn = payload.turn % 2 === turn ? true : false;
  let store = {
    energy: {
      ally: payload.energy[ally],
      enemy: payload.energy[enemy]
    },
    ally: payload[ally].map(x => {
      return {
        ...x,
        indicator: statusView(x.name, x.status)
      };
    }),
    enemy: payload[enemy].map(x => {
      return {
        ...x,
        indicator: statusView(x.name, x.status)
      };
    }),
    turn: payload.turn,
    myTurn: myTurn,
    room: payload.room
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
            !myTurn === false ||
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
  app.state.timer.turn = 100;
  app.state.winner = payload.winner;
}

function statusView(name, payload) {
  // console.log(name, payload);
  let status = _.concat(
    payload.onAttack,
    payload.onReceive,
    payload.onState,
    payload.onSelf
  );
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
