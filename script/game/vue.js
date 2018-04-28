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
        offense: "",
        skill: null,
        target: "",
        aim: ""
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
      console.log(e);
      this.source.energy.ally = e.energy;
      this.state.exchange.energy = e.cost;
      this.state.exchange.modal = false;
      this.state.exchange.used = true;
      this.state.exchange.val = e.exchange;

      this.state.button.ally.forEach((x, xi) => {
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
    },
    onDone: function(e) {
      this.state.energy.modal = false;
      console.log(e.packet);
      let packet = e.packet;
      packet = packet.filter(
        x =>
          x.skill !== null &&
          x.offense !== "" &&
          x.target !== "" &&
          x.aim !== "" &&
          x.heroIndex !== null
      );
      packet.unshift(e.energy);
      if (this.state.exchange.used === true) {
        packet.unshift(
          { msg: "exchange", val: this.state.exchange.val },
          this.state.exchange.energy
        );
        this.state.exchange.used = false;
      }
      // this.packet = this.packet.filter(x => x.skill !== null && x.offense !== '' && x.target !== '' && x.aim !== '' && x.heroIndex !== null)
      // this.packet.unshift(e.energy)
      console.log(packet);
      socket.emit("sequence", {
        packet: packet,
        room: this.source.room
      });
      this.state.energy.random = 0;
      this.packet = [];
      console.log(e);
    },
    onSkill: function(payload) {
      //Define and Switch State
      let state = this.state;
      let marking = this.source.ally[payload.heroIndex].skill[
        payload.skillIndex
      ].marking;
      console.log(marking);
      let temporary = {
        offense: payload.name,
        skill: payload.skillIndex,
        skillId: payload.skillId,
        target: "",
        aim: payload.target,
        heroIndex: payload.heroIndex,
        marking: marking
      };
      console.log(state);
      console.log(payload);

      if (state.button.ally[temporary.heroIndex].onSkill === false) {
        //Buffer Skill
        state.skill = temporary;
        energyManagement(temporary, "substract");
        //Button Management
        buttonManagement(temporary, "onSkill");
      } else {
        energyManagement(temporary, "add");
        //Button Management
        if (
          state.button.ally[temporary.heroIndex].onSkill &&
          state.skill.heroIndex === null
        ) {
          buttonManagement(temporary, "onSelf");
        } else if (
          state.button.ally[temporary.heroIndex].onSkill &&
          state.skill.heroIndex !== null
        ) {
          buttonManagement(temporary, "onCancel");
        }
        // else {
        //     buttonManagement(temporary, 'onSkill')
        // }
        this.packet = this.packet.filter(x => x.offense !== temporary.offense);
        //Clean Skill Buffer
        state.skill = {
          offense: "",
          skill: null,
          skillId: null,
          target: "",
          aim: "",
          heroIndex: null
        };
      }

      //State Management
      state.button.ally[temporary.heroIndex].onSkill = !state.button.ally[
        temporary.heroIndex
      ].onSkill;
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
        console.log(state.skill.target);
      } else if (state.skill.aim === "allally") {
        state.skill.target = state.button.ally.map(x => x.name);
      } else if (state.skill.aim === "allenemyallally") {
        state.skill.target = state.button.enemy
          .filter(x => x.disabled !== true && x.name !== payload.name)
          .map(x => x.name);
        state.skill.target.unshift(payload.name);
        let ally = state.button.ally.map(x => x.name);
        state.skill.target = state.skill.target.concat(ally);
        console.log(state.skill.target);
      } else if (state.skill.aim === "otherally") {
        state.skill.target = state.button.ally
          .filter(x => x.name !== state.skill.offense)
          .map(x => x.name);
      } else {
        state.skill.target = [payload.name];
      }
      //Register Skill
      this.packet.push(this.state.skill);

      //Button Management
      buttonManagement(state.skill, "onTarget");

      //Clean Skill Buffer
      state.skill = {
        offense: "",
        skill: null,
        skillId: null,
        target: "",
        aim: "",
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
    onGetImage: function(payload, option) {
      if (option === "packet") {
        let index = this.source.ally.findIndex(x => x.name === payload.offense);
        let nameId = this.source.ally[index].nameId;

        return (
          "/assets/character/" +
          nameId.slice(0,-1) +
          "/skill" +
          (payload.skill + 1) +
          "/avatar.jpg"
        );
      } else if (option === "char") {
        return "/assets/character/" + payload.nameId.slice(0,-1) + "/avatar.jpg";
      } else if (option === "skill") {
        return (
          "/assets/character/" +
          payload.nameId.slice(0,-1) +
          "/skill" +
          (payload.skill + 1) +
          "/avatar.jpg"
        );
      } else if (option === "status") {
        return (
          "/assets/character/" +
          payload.nameId.slice(0,-1) +
          "/skill" +
          payload.skill +
          "/avatar.jpg"
        );
      }
    }
  }
});
