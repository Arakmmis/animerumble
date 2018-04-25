function energyManagement(temporary, option) {
  let energy = temporary.energy ? temporary.energy : app.source.energy.ally;
  let skill = temporary.skillBind
    ? temporary.skillBind
    : app.source.ally[temporary.heroIndex].skill[temporary.skill].energy;
  let total = {
    energy: energy.a + energy.i + energy.s + energy.w,
    skill: skill.a + skill.i + skill.s + skill.w
  };

  if (option === "substract") {
    console.log("test");
    if (skill.a > 0) {
      energy.a -= skill.a;
      energy.r -= skill.a;
    }
    if (skill.i > 0) {
      energy.i -= skill.i;
      energy.r -= skill.i;
    }
    if (skill.s > 0) {
      energy.s -= skill.s;
      energy.r -= skill.s;
    }
    if (skill.w > 0) {
      energy.w -= skill.w;
      energy.r -= skill.w;
    }
    if (skill.r > 0) {
      energy.r -= skill.r;
      app.state.energy.random += skill.r;
    }
  } else if (option === "add") {
    if (skill.a > 0) {
      energy.a += skill.a;
      energy.r += skill.a;
    }
    if (skill.i > 0) {
      energy.i += skill.i;
      energy.r += skill.i;
    }
    if (skill.s > 0) {
      energy.s += skill.s;
      energy.r += skill.s;
    }
    if (skill.w > 0) {
      energy.w += skill.w;
      energy.r += skill.w;
    }
    if (skill.r > 0) {
      energy.r += skill.r;
      app.state.energy.random -= skill.r;
    }
  } else if (option === "check") {
    let active = true;
    if (total.energy >= total.skill) {
      let count = [true, true, true, true, true];
      if (skill.a >= 0) {
        count[0] = energy.a >= skill.a ? false : true;
      }
      if (skill.i >= 0) {
        count[1] = energy.i >= skill.i ? false : true;
      }
      if (skill.s >= 0) {
        count[2] = energy.s >= skill.s ? false : true;
      }
      if (skill.w >= 0) {
        count[3] = energy.w >= skill.w ? false : true;
      }
      if (skill.r >= 0) {
        count[4] = energy.r >= total.skill + skill.r ? false : true;
      }

      if (count.filter(x => x === false).length === 5) {
        active = false;
      } else {
        active = true;
      }
    }
    return active;
  }
}

function buttonManagement(payload, option) {
  //Target Button
  if (option !== "onSelf") {
    if (payload.aim === "enemy") {
      app.state.button.enemy.forEach(x => {
        x.button = x.disabled ? true : !x.button;
        if (payload.marking === true) {
          let skillName =
            app.source.ally[payload.heroIndex].skill[payload.skill].name;
          let marking =
            app.source.enemy[x.index].status.onReceive.some(
              x => x.name === skillName
            ) ||
            app.source.enemy[x.index].status.onState.some(
              x => x.name === skillName
            );
          if (marking === true) {
            x.button = true;
          }
        }
      });
    } else if (payload.aim === "allenemy" || payload.aim === "randomenemy") {
      app.state.button.enemy.forEach(
        x => (x.button = x.disabled ? true : !x.button)
      );
    } else if (payload.aim === "allenemyallally") {
      app.state.button.enemy.forEach(
        x => (x.button = x.disabled ? true : !x.button)
      );
    } else if (payload.aim === "ally") {
      app.state.button.ally.forEach(
        x => (x.button = x.disabled ? true : !x.button)
      );
    } else if (payload.aim === "allally") {
      app.state.button.ally.forEach(
        x => (x.button = x.disabled ? true : !x.button)
      );
    } else if (payload.aim === "otherally") {
      app.state.button.ally.forEach(x => {
        let name = app.state.button.ally[payload.heroIndex].name;
        if (x.name !== name) {
          x.button = x.disabled ? true : !x.button;
        }
      });
    } else if (payload.aim === "self") {
      app.state.button.ally[payload.heroIndex].button = app.state.button.ally[
        payload.heroIndex
      ].disabled
        ? true
        : !app.state.button.ally[payload.heroIndex].button;
    }
  }

  //Skill Button
  if (option === "onSkill") {
    console.log("onSkill");
    app.state.button.ally.forEach(x => {
      if (x.onSkill === false) {
        x.skill.forEach(s => {
          s.button = true;
          if (
            x.name === payload.offense &&
            s.name ===
              app.source.ally[payload.heroIndex].skill[payload.skill].name
          ) {
            s.button = false;
          }
        });
      }
    });
  }
  if (option === "onCancel") {
    console.log("onCancel");
    app.state.button.ally.forEach(x => {
      if (x.onSkill === false || x.name === payload.offense) {
        x.skill.forEach(s => {
          s.button = s.disabled ? true : false;
          if (
            x.name === payload.offense &&
            s.name ===
              app.source.ally[payload.heroIndex].skill[payload.skill].name
          ) {
            s.button = false;
          }
        });
      }
    });
  } else if (option === "onTarget") {
    console.log("onTarget");
    app.state.button.ally.forEach(x => {
      let index = app.packet.findIndex(s => s.offense === x.name);
      if (index < 0) {
        x.skill.forEach(s => {
          s.button = s.disabled ? true : false;
        });
      }
    });
  } else if (option === "onSelf") {
    console.log("onSelf");
    app.state.button.ally[payload.heroIndex].skill.forEach(s => {
      s.button = s.disabled ? true : false;
    });
  }

  //Energy Management
  if (option !== "onSkill") {
    app.state.button.ally.forEach((x, xi) => {
      if (x.onSkill === false && x.name !== payload.offense) {
        console.log(x.name);
        console.log(option);
        x.skill.forEach((s, si) => {
          let energy = energyManagement({ heroIndex: xi, skill: si }, "check");
          s.button = s.disabled || energy ? true : false;
          if (
            x.name === payload.offense &&
            s.name ===
              app.source.ally[payload.heroIndex].skill[payload.skill].name
          ) {
            s.button = false;
          }
        });
      }

      if (
        (option === "onSelf" || option === "onCancel") &&
        x.name === payload.offense
      ) {
        x.skill.forEach((s, si) => {
          let energy = energyManagement({ heroIndex: xi, skill: si }, "check");
          s.button = s.disabled || energy ? true : false;
        });
      }
    });
  }
}
