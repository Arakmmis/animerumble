function vueBind(payload) {
  let username = getCookie("username");
  if (payload.team.teamEven !== username && payload.team.teamOdd !== username) {
    return;
  }
  console.log(payload);
  let ally = payload.team.teamEven === username ? "teamEven" : "teamOdd";
  let enemy = payload.team.teamEven === username ? "teamOdd" : "teamEven";
  let turn = ally === "teamEven" ? 1 : 0;
  let myTurn = payload.turn % 2 === turn ? true : false;
  let store = {
    energy: {
      ally: payload.energy[ally],
      enemy: payload.energy[enemy]
    },
    ally: payload[ally],
    enemy: payload[enemy],
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
      let stun = x.status.onState.some(x => x.type === "stun") ? true : false;
      return {
        name: x.name,
        button: true,
        onSkill: false,
        disabled: disabled,
        skill: x.skill.map(s => {
          console.log(s.type);
          let energy = energyManagement(
            { energy: store.energy.ally, skillBind: s.energy },
            "check"
          );
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
      let disabled =
        x.status.onState.some(x => x.type === "invulnerable") || x.hp <= 0
          ? true
          : false;
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
