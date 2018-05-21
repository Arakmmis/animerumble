Vue.use(VTooltip);
let app = new Vue({
  el: "#app",
  data: {
    mode: "game",
    log: [],
    current: 0,
    source: {
      energy: {
        ally: {}
      },
      meta: {}
    },
    state: {
      description: null
    },
    packet: [],
    action: []
  },
  methods: {
    next() {
      let goTo = this.current + 1;
      if (goTo >= this.log.length) {
        goTo = this.log.length - 1;
      }
      this.current = goTo;
      vueBind(app.log[goTo]);
    },
    previous() {
      let goTo = this.current - 1;
      if (goTo < 0) {
        goTo = 0;
      }
      this.current = goTo;
      vueBind(app.log[goTo]);
    },
    onDescription: function(payload, option = undefined) {
      if (option === undefined) {
        option = "ally";
      }

      //Sound
      // this.$refs.soundClick.play();

      //Define
      let owner = this.source[option][payload.heroIndex];
      let skillIndex = owner.skill.findIndex(x => x.id === payload.skillId);
      let config = {
        nameId: payload.nameId,
        skill: skillIndex,
        skillId: payload.skillId,
        heroIndex: payload.heroIndex,
        option: option
      };
      let skill = owner.skill[config.skill];

      //Map Description
      let map = {
        name: skill.name,
        energy: {
          a: skill.energy.a,
          i: skill.energy.i,
          s: skill.energy.s,
          w: skill.energy.w,
          r: skill.energy.r,
          total:
            skill.energy.a +
            skill.energy.i +
            skill.energy.s +
            skill.energy.w +
            skill.energy.r
        },
        description: skill.description,
        classes: skill.classes,
        cooldown: skill.cooldown
      };

      let alt = skill.alt !== false ? skill.alt : false;

      //Buffer Description
      let state = this.state;
      state.description = {
        nameId: config.nameId,
        skill: config.skillId,
        heroIndex: config.heroIndex,
        map: map,
        alt: alt,
        option: option
      };
    },
    onGetImage: function(payload, option) {
      if (option === "packet") {
        console.log("hi");
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
      }
    },
    onHP: function(hp) {
      if (hp > 70) {
        return "l--hp-full";
      } else if (hp <= 70 && hp >= 40) {
        return "l--hp-mid";
      } else {
        return "l--hp-low";
      }
    },
    targetingCue: function(payload, nameId) {
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

      if (nameId) {
        result.nameId = nameId;
      }
      console.log(result);

      return result;
    }
  }
});
