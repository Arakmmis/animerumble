function getState() {
  let username = "ai";
  let ally = payload.team.teamEven === username ? "teamEven" : "teamOdd";
  let enemy = payload.team.teamEven === username ? "teamOdd" : "teamEven";
  let turn = ally === "teamEven" ? 0 : 1;
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
  let button = {
    ally: store.ally.map(x => {
      let disabled = x.hp <= 0 ? true : false;
      return {
        name: x.name,
        button: true,
        onSkill: false,
        disabled: disabled,
        skill: x.skill.map(s => {
          let energy = energyManagement(
            { energy: store.energy.ally, skillBind: s.energy },
            "check"
          );
          let stun = stunManagement(x.status.onState, s);
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
}
