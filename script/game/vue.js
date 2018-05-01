Vue.use(VTooltip);
let app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vuee.js!",
    source: {
      energy: {
        ally: {}
      }
    },
    packet: [],
    state: {
      skill: {
        offense: null,
        skill: null,
        target: null,
        aim: null
      },
      timer: {
        turn: 100
      },
      onSkill: false,
      button: {},
      description: null,
      winner: {
        state: false,
        name: ""
      },
      energy: {
        modal: false,
        random: 0
      },
      exchange: {
        modal: false,
        used: false,
        energy: {},
        val: ""
      }
    },
    showModal: true
  },
  methods: {
    onExchange: function(e) {
      let state = this.state;
      this.source.energy.ally = e.energy;
      this.source.energy.ally.r = this.source.energy.ally.r - this.state.energy.random
      state.exchange.energy = e.cost;      
      state.exchange.modal = false;
      state.exchange.used = true;
      state.exchange.val = e.exchange;

      state.button.ally.forEach((x, xi) => {
        if (x.onSkill === false) {
          console.log(x.name);
          x.skill.forEach((s, si) => {
            let energy = energyManagement(
              { heroIndex: xi, skill: si },
              "check"
            );
            s.button = s.disabled || energy ? true : false;
            console.log(energy, s.disabled, s.button);
          });
        }
      });

      //Clean Skill Buffer
      if (state.skill.offense !== null && state.skill.target === null) {
        //Switch Choice
        //Button Management
        buttonManagement(state.skill, "onCancel");
        //Clean Buffer
        state.skill = {
          offense: null,
          skill: null,
          skillId: null,
          target: null,
          aim: null,
          heroIndex: null
        };
      }
    },
    onDone: function(e) {
      //Define
      let state = this.state;
      let packet = e.packet;

      //Organize
      state.energy.modal = false;
      packet = packet.filter(
        x =>
          x.skill !== null &&
          x.offense !== null &&
          x.target !== null &&
          x.aim !== null &&
          x.heroIndex !== null
      );
      packet.unshift(e.energy);
      if (state.exchange.used === true) {
        packet.unshift(
          { msg: "exchange", val: state.exchange.val },
          state.exchange.energy
        );
        state.exchange.used = false;
      }

      //Send
      socket.emit("sequence", {
        packet: packet,
        room: this.source.room
      });

      //Reset
      state.energy.random = 0;
      this.packet = [];
      state.skill = {
        offense: null,
        skill: null,
        skillId: null,
        target: null,
        aim: null,
        heroIndex: null
      };
    },
    onSkill: function(payload) {
      //Define and Switch State
      let state = this.state;
      let marking = this.source.ally[payload.heroIndex].skill[
        payload.skillIndex
      ].marking;
      let temporary = {
        offense: payload.name,
        skill: payload.skillIndex,
        skillId: payload.skillId,
        target: null,
        aim: payload.target,
        heroIndex: payload.heroIndex,
        marking: marking
      };

      //Is Skill Chosen?
      let isOnSkill = state.button.ally[temporary.heroIndex].onSkill;

      if (
        isOnSkill === false &&
        state.skill.offense === null &&
        state.skill.target === null
      ) {
        //First Choice
        //Buffer Skill
        state.skill = temporary;
        //Button Management
        buttonManagement(temporary, "onSkill");
      } else if (
        isOnSkill === false &&
        state.skill.offense !== null &&
        state.skill.target === null
      ) {
        //Switch Choice
        //Button Management
        buttonManagement(state.skill, "onCancel");
        buttonManagement(temporary, "onSkill");
        //Buffer Skill
        state.skill = temporary;
      } else if (isOnSkill === true) {
        console.log("cancel");
        //Cancel Choice
        energyManagement(temporary, "add");
        //Button Management
        buttonManagement(state.skill, "onCancel");
        buttonManagement(temporary, "onSelf");
        // if (
        //   state.button.ally[temporary.heroIndex].onSkill &&
        //   state.skill.heroIndex === null
        // ) {
        //   buttonManagement(temporary, "onSelf");
        // } else if (
        //   state.button.ally[temporary.heroIndex].onSkill &&
        //   state.skill.heroIndex !== null
        // ) {
        //   buttonManagement(temporary, "onCancel");
        // }
        this.packet = this.packet.filter(x => x.offense !== temporary.offense);
        //Clean Skill Buffer
        state.skill = {
          offense: null,
          skill: null,
          skillId: null,
          target: null,
          aim: null,
          heroIndex: null
        };
        //State Management
        state.button.ally[temporary.heroIndex].onSkill = false;
      }
    },
    onTarget: function(payload) {
      //Define State
      let state = this.state;

      //Buffer Skill
      if (state.skill.aim === "allenemy" || state.skill.aim === "randomenemy") {
        state.skill.target = state.button.enemy
          .filter(x => x.disabled !== true && x.name !== payload.name)
          .map(x => x.name);
        state.skill.target.unshift(payload.name);
      } else if (state.skill.aim === "allally") {
        state.skill.target = state.button.ally.map(x => x.name);
      } else if (state.skill.aim === "allenemyallally") {
        state.skill.target = state.button.enemy
          .filter(x => x.disabled !== true && x.name !== payload.name)
          .map(x => x.name);
        state.skill.target.unshift(payload.name);
        let ally = state.button.ally.map(x => x.name);
        state.skill.target = state.skill.target.concat(ally);
      } else if (state.skill.aim === "otherally") {
        state.skill.target = state.button.ally
          .filter(x => x.name !== state.skill.offense)
          .map(x => x.name);
      } else {
        state.skill.target = [payload.name];
      }
      //Register Skill
      this.packet.push(this.state.skill);

      //Energy Management
      energyManagement(state.skill, "substract");
      //Button Management
      // buttonManagement(state.skill, "onSkill");
      buttonManagement(state.skill, "onTarget");
      //State Management
      state.button.ally[state.skill.heroIndex].onSkill = true;

      //Clean Skill Buffer
      state.skill = {
        offense: null,
        skill: null,
        skillId: null,
        target: null,
        aim: null,
        heroIndex: null
      };
    },
    onAttack: function(payload) {
      this.state.energy.modal = true;
    },
    onDescription: function(payload) {
      let state = this.state;
      let temporary = {
        offense: payload.name,
        skill: payload.skillIndex,
        target: "",
        aim: payload.target,
        heroIndex: payload.heroIndex
      };

      //Buffer Skill
      state.description = {
        skill: temporary.skill,
        heroIndex: temporary.heroIndex
      };
    },
    onStatus: function(payload) {
      console.log(payload);
      let status = _.concat(
        payload.onAttack,
        payload.onReceive,
        payload.onState,
        payload.onSelf
      );
      console.log(status);
      let group = _.groupBy(status, "nameId");
      console.log(group);
      let subgroup = _.toArray(group).map(x =>
        _.toArray(_.groupBy(x, "skillIndex"))
      );
      let prep = subgroup.map(x => x[0]);
      let final = prep.map(x => {
        console.log(x[0]);
        let info = x[0];
        return {
          nameId: info.nameId,
          status: info.skillIndex,
          val: x
        };
      });
      console.log(prep);
      console.log(final);
      return final;
      // let subgroup = group.map(x => _.groupBy(x, "skillIndex"));
    },
    onGetImage: function(payload, option) {
      if (option === "packet") {
        let index = this.source.ally.findIndex(x => x.name === payload.offense);
        let nameId = this.source.ally[index].nameId;

        return (
          "/assets/character/" +
          nameId.slice(0, -1) +
          "/skill" +
          (payload.skill + 1) +
          "/avatar.jpg"
        );
      } else if (option === "char") {
        return (
          "/assets/character/" + payload.nameId.slice(0, -1) + "/avatar.jpg"
        );
      } else if (option === "skill") {
        return (
          "/assets/character/" +
          payload.nameId.slice(0, -1) +
          "/skill" +
          (payload.skill + 1) +
          "/avatar.jpg"
        );
      } else if (option === "status") {
        return (
          "/assets/character/" +
          payload.nameId.slice(0, -1) +
          "/skill" +
          payload.skill +
          "/avatar.jpg"
        );
      } else if (option === "targeting") {
        let index = this.packet.findIndex(x => x.offense === payload.name);
        let skillId = this.packet[index].skillId;
        return (
          "/assets/character/" +
          payload.nameId.slice(0, -1) +
          "/skill" +
          (skillId + 1) +
          "/avatar.jpg"
        );
      }
    },
    targetingCue: function(payload) {
      let name = payload;
      let index = this.packet.findIndex(x => x.offense === payload);
      let packet = this.packet[index];

      let result = {
        name: name,
        skillIndex: packet.skill,
        skillId: packet.skillId,
        heroIndex: packet.heroIndex,
        target: packet.target
      };
      console.log(result);

      return result;
    }
  }
});
