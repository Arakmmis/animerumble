function NumberInt(payload) {
  return payload;
}

let log = [
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(2),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(0),
        s: NumberInt(1),
        i: NumberInt(0),
        w: NumberInt(0)
      },
      teamEven: {
        a: NumberInt(0),
        s: NumberInt(0),
        i: NumberInt(0),
        w: NumberInt(0)
      }
    },
    turn: NumberInt(1),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908649240.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(2),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(0),
        s: NumberInt(1),
        i: NumberInt(0),
        w: NumberInt(0)
      },
      teamEven: {
        a: NumberInt(1),
        s: NumberInt(1),
        i: NumberInt(1),
        w: NumberInt(0)
      }
    },
    turn: NumberInt(2),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908654045.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(2),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(1),
        s: NumberInt(1),
        i: NumberInt(0),
        w: NumberInt(2)
      },
      teamEven: {
        a: NumberInt(1),
        s: NumberInt(1),
        i: NumberInt(1),
        w: NumberInt(0)
      }
    },
    turn: NumberInt(3),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908655836.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(2),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(1),
        s: NumberInt(1),
        i: NumberInt(0),
        w: NumberInt(2)
      },
      teamEven: {
        a: NumberInt(1),
        s: NumberInt(2),
        i: NumberInt(2),
        w: NumberInt(1)
      }
    },
    turn: NumberInt(4),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908665158.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(2),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(1),
        s: NumberInt(3),
        i: NumberInt(1),
        w: NumberInt(2)
      },
      teamEven: {
        a: NumberInt(1),
        s: NumberInt(2),
        i: NumberInt(2),
        w: NumberInt(1)
      }
    },
    turn: NumberInt(5),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908666922.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: NumberInt(0),
              type: "disableDrIv",
              harmful: true,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "disableDrIv",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(3),
              val: NumberInt(0),
              type: "lock",
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: "Sand Burial",
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "lock",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: NumberInt(0),
              type: "stun",
              harmful: true,
              classes: ["mental"],
              info: "declusive",
              persistence: "control",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "stun",
              description: ""
            }
          ]
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: null,
              type: null,
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: null,
              description: ""
            }
          ],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(1),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "cooldown",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(1),
        s: NumberInt(2),
        i: NumberInt(1),
        w: NumberInt(1)
      },
      teamEven: {
        a: NumberInt(1),
        s: NumberInt(3),
        i: NumberInt(4),
        w: NumberInt(1)
      }
    },
    turn: NumberInt(6),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908679456.0,
    room: "jhg9zgo8",
    log: [
      {
        offense: "Gaara1",
        skill: NumberInt(0),
        skillId: NumberInt(0),
        target: ["Sakura Haruno0"],
        aim: "enemy",
        heroIndex: NumberInt(0),
        id: NumberInt(0)
      }
    ]
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: NumberInt(0),
              type: "disableDrIv",
              harmful: true,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "disableDrIv",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: NumberInt(0),
              type: "lock",
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: "Sand Burial",
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "lock",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: NumberInt(0),
              type: "stun",
              harmful: true,
              classes: ["mental"],
              info: "declusive",
              persistence: "control",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "stun",
              description: ""
            }
          ]
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: null,
              type: null,
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: null,
              description: ""
            }
          ],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(1),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "cooldown",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(2),
        s: NumberInt(3),
        i: NumberInt(1),
        w: NumberInt(2)
      },
      teamEven: {
        a: NumberInt(1),
        s: NumberInt(3),
        i: NumberInt(4),
        w: NumberInt(1)
      }
    },
    turn: NumberInt(7),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908682661.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: NumberInt(0),
              type: "disableDrIv",
              harmful: true,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "disableDrIv",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: NumberInt(0),
              type: "lock",
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: "Sand Burial",
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "lock",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: NumberInt(0),
              type: "stun",
              harmful: true,
              classes: ["mental"],
              info: "declusive",
              persistence: "control",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "stun",
              description: ""
            }
          ]
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: null,
              type: null,
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: null,
              description: ""
            }
          ],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(0),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "cooldown",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(2),
        s: NumberInt(3),
        i: NumberInt(1),
        w: NumberInt(2)
      },
      teamEven: {
        a: NumberInt(2),
        s: NumberInt(4),
        i: NumberInt(5),
        w: NumberInt(1)
      }
    },
    turn: NumberInt(8),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908756197.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: NumberInt(0),
              type: "lock",
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: "Sand Burial",
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "lock",
              description: ""
            }
          ]
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: null,
              type: null,
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: null,
              description: ""
            }
          ],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(0),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "cooldown",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(3),
        s: NumberInt(3),
        i: NumberInt(2),
        w: NumberInt(3)
      },
      teamEven: {
        a: NumberInt(2),
        s: NumberInt(4),
        i: NumberInt(5),
        w: NumberInt(1)
      }
    },
    turn: NumberInt(9),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908758437.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(0),
        status: {
          onReceive: [],
          onAttack: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: false,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(2),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(3),
        s: NumberInt(1),
        i: NumberInt(2),
        w: NumberInt(3)
      },
      teamEven: {
        a: NumberInt(2),
        s: NumberInt(5),
        i: NumberInt(5),
        w: NumberInt(3)
      }
    },
    turn: NumberInt(10),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908775618.0,
    room: "jhg9zgo8",
    log: [
      {
        offense: "Gaara1",
        skill: NumberInt(0),
        skillId: NumberInt(4),
        target: ["Sakura Haruno0"],
        aim: "enemylock",
        heroIndex: NumberInt(0),
        id: NumberInt(0)
      }
    ]
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(0),
        status: {
          onReceive: [],
          onAttack: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: false,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(2),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(4),
        s: NumberInt(2),
        i: NumberInt(2),
        w: NumberInt(4)
      },
      teamEven: {
        a: NumberInt(2),
        s: NumberInt(5),
        i: NumberInt(5),
        w: NumberInt(3)
      }
    },
    turn: NumberInt(11),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908779304.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: NumberInt(0),
              type: "disableDrIv",
              harmful: true,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "disableDrIv",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(3),
              val: NumberInt(0),
              type: "lock",
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: "Sand Burial",
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "lock",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: NumberInt(0),
              type: "stun",
              harmful: true,
              classes: ["mental"],
              info: "declusive",
              persistence: "control",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "stun",
              description: ""
            }
          ]
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(0),
        status: {
          onReceive: [],
          onAttack: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: false,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: null,
              type: null,
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: null,
              description: ""
            }
          ],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(1),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "cooldown",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(4),
        s: NumberInt(1),
        i: NumberInt(2),
        w: NumberInt(3)
      },
      teamEven: {
        a: NumberInt(3),
        s: NumberInt(5),
        i: NumberInt(6),
        w: NumberInt(3)
      }
    },
    turn: NumberInt(12),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908785660.0,
    room: "jhg9zgo8",
    log: [
      {
        offense: "Gaara1",
        skill: NumberInt(0),
        skillId: NumberInt(0),
        target: ["Uzumaki Naruto0"],
        aim: "enemy",
        heroIndex: NumberInt(0),
        id: NumberInt(0)
      }
    ]
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: NumberInt(0),
              type: "disableDrIv",
              harmful: true,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "disableDrIv",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: NumberInt(0),
              type: "lock",
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: "Sand Burial",
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "lock",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: NumberInt(0),
              type: "stun",
              harmful: true,
              classes: ["mental"],
              info: "declusive",
              persistence: "control",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "stun",
              description: ""
            }
          ]
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(0),
        status: {
          onReceive: [],
          onAttack: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: false,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: null,
              type: null,
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: null,
              description: ""
            }
          ],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(1),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "cooldown",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(4),
        s: NumberInt(1),
        i: NumberInt(4),
        w: NumberInt(4)
      },
      teamEven: {
        a: NumberInt(3),
        s: NumberInt(5),
        i: NumberInt(6),
        w: NumberInt(3)
      }
    },
    turn: NumberInt(13),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908788602.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: NumberInt(0),
              type: "disableDrIv",
              harmful: true,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "disableDrIv",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(2),
              val: NumberInt(0),
              type: "lock",
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: "Sand Burial",
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "lock",
              description: ""
            },
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: NumberInt(0),
              type: "stun",
              harmful: true,
              classes: ["mental"],
              info: "declusive",
              persistence: "control",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "stun",
              description: ""
            }
          ]
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(0),
        status: {
          onReceive: [],
          onAttack: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: false,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: null,
              type: null,
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: null,
              description: ""
            }
          ],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(0),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "cooldown",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(4),
        s: NumberInt(1),
        i: NumberInt(4),
        w: NumberInt(4)
      },
      teamEven: {
        a: NumberInt(4),
        s: NumberInt(5),
        i: NumberInt(6),
        w: NumberInt(4)
      }
    },
    turn: NumberInt(14),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908795164.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: NumberInt(0),
              type: "lock",
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: "Sand Burial",
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: "lock",
              description: ""
            }
          ]
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(0),
        status: {
          onReceive: [],
          onAttack: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: false,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [
            {
              name: "Sand Coffin",
              nameId: "gaara1",
              owner: "gaara1",
              skillIndex: NumberInt(1),
              active: NumberInt(1),
              val: null,
              type: null,
              harmful: false,
              classes: ["physical", "ranged", "control"],
              info: null,
              persistence: "instant",
              allow: false,
              period: false,
              usage: NumberInt(0),
              stack: NumberInt(1),
              nextTurn: false,
              harmfulOnly: false,
              defense: NumberInt(0),
              isCounter: false,
              isInvisible: false,
              isStack: false,
              effect: null,
              description: ""
            }
          ],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(0),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "cooldown",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(5),
        s: NumberInt(2),
        i: NumberInt(4),
        w: NumberInt(5)
      },
      teamEven: {
        a: NumberInt(4),
        s: NumberInt(5),
        i: NumberInt(6),
        w: NumberInt(4)
      }
    },
    turn: NumberInt(15),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908799124.0,
    room: "jhg9zgo8",
    log: []
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(0),
        status: {
          onReceive: [],
          onAttack: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: false,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(0),
        status: {
          onReceive: [],
          onAttack: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: false,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(2),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(5),
        s: NumberInt(0),
        i: NumberInt(4),
        w: NumberInt(5)
      },
      teamEven: {
        a: NumberInt(4),
        s: NumberInt(7),
        i: NumberInt(6),
        w: NumberInt(4)
      }
    },
    turn: NumberInt(16),
    winner: {
      state: false,
      name: ""
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908803208.0,
    room: "jhg9zgo8",
    log: [
      {
        offense: "Gaara1",
        skill: NumberInt(0),
        skillId: NumberInt(4),
        target: ["Uzumaki Naruto0"],
        aim: "enemylock",
        heroIndex: NumberInt(0),
        id: NumberInt(0)
      }
    ]
  },
  {
    teamEven: [
      {
        name: "Uzumaki Naruto0",
        hp: NumberInt(0),
        status: {
          onReceive: [],
          onAttack: [],
          onSelf: [],
          onState: []
        },
        nameId: "uzumakiNaruto0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Uzumaki Naruto Combo",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto's version of the Lion Combo. This skill deals 20 damage to one enemy. During 'Shadow Clones' this skill will deal 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Rasengan",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto hits one enemy with a ball of chakra dealing 45 damage to them and stunning their skills for 1 turn. This skill requires 'Shadow Clones'.",
            val: NumberInt(45),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: true,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Shadow Clones",
            nameId: "uzumakiNaruto0",
            description:
              "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 points of damage reduction for 4 turns. During this time 'Uzumaki Naruto Combo' will deal 10 additional damage and 'Rasengan' can be used.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sexy Technique",
            nameId: "uzumakiNaruto0",
            description:
              "This skill makes Uzumaki Naruto invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: false,
        id: NumberInt(0),
        team: "teamEven"
      },
      {
        name: "Sakura Haruno0",
        hp: NumberInt(0),
        status: {
          onReceive: [],
          onAttack: [],
          onSelf: [],
          onState: []
        },
        nameId: "sakuraHaruno0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "KO Punch",
            nameId: "sakuraHaruno0",
            description:
              "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
            val: NumberInt(20),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(1),
            name: "Mystical Palm Healing",
            nameId: "sakuraHaruno0",
            description:
              "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
            val: NumberInt(25),
            target: "ally",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Inner Sakura",
            nameId: "sakuraHaruno0",
            description:
              "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Sakura Hide",
            nameId: "sakuraHaruno0",
            description:
              "This skill makes Haruno Sakura invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: false,
        id: NumberInt(1),
        team: "teamEven"
      },
      {
        name: "Uchiha Sasuke0",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke0",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke0",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke0",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke0",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke0",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamEven"
      }
    ],
    teamOdd: [
      {
        name: "Gaara1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "gaara1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Sand Coffin",
            nameId: "gaara1",
            description:
              "Gaara surrounds one enemy with a pile of sand stunning their non-mental skills for 2 turns. For 2 turns, that enemy cannot reduce damage or become invulnerable. During this time, this skill will be replaced by 'Sand Burial'.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(2),
            counter: NumberInt(2),
            classes: ["physical", "ranged", "control"],
            type: "attack",
            alt: NumberInt(4),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Sand Clone",
            nameId: "gaara1",
            description:
              "Gaara creates a clone of sand that mimics him and provides defense. Until Gaara receives new harmful non-affliction damage, he will ignore all harmful effects except damage and chakra cost changes. This skill cannot be used while active.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Armor of Sand",
            nameId: "gaara1",
            description:
              "By covering himself with sand, Gaara permanently gains 40 points of destructible defense. This skill cannot stack and will re-apply itself.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "energy"],
            type: "attack",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Shield of Sand",
            nameId: "gaara1",
            description:
              "This skill makes Gaara of the Desert invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(4),
            name: "Sand Burial",
            nameId: "gaara1",
            description:
              "Gaara crushes one enemy with sand. That enemy is killed. This skill requires 'Sand Coffin' to be active on the enemy. This skill cannot be countered or reflected.",
            val: NumberInt(100),
            target: "enemylock",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "physical"],
            type: "attack",
            alt: NumberInt(0),
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: true,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(2),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          }
        ],
        alive: true,
        id: NumberInt(0),
        team: "teamOdd"
      },
      {
        name: "Inuzuka Kiba1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "inuzukaKiba1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Garouga",
            nameId: "inuzukaKiba1",
            description:
              "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Double-Headed Wolf",
            nameId: "inuzukaKiba1",
            description:
              "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
            val: NumberInt(0),
            target: "allenemy",
            cooldown: NumberInt(3),
            counter: NumberInt(3),
            classes: ["action", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(1),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(2),
            name: "Dynamic Marking",
            nameId: "inuzukaKiba1",
            description:
              "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "ranged", "affliction"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: true,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(0)
            }
          },
          {
            id: NumberInt(3),
            name: "Smoke Bomb",
            nameId: "inuzukaKiba1",
            description:
              "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(1),
        team: "teamOdd"
      },
      {
        name: "Uchiha Sasuke1",
        hp: NumberInt(100),
        status: {
          onAttack: [],
          onReceive: [],
          onSelf: [],
          onState: []
        },
        nameId: "uchihaSasuke1",
        anime: "Naruto",
        credit: {
          author: "",
          pictures: ""
        },
        skill: [
          {
            id: NumberInt(0),
            name: "Lion Combo",
            nameId: "uchihaSasuke1",
            description:
              "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(0),
            counter: NumberInt(0),
            classes: ["instant", "melee", "physical"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(1),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(1),
            name: "Chidori",
            nameId: "uchihaSasuke1",
            description:
              "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
            val: NumberInt(30),
            target: "enemy",
            cooldown: NumberInt(1),
            counter: NumberInt(1),
            classes: ["instant", "melee", "energy"],
            type: "piercing",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(1),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(2),
            name: "Sharingan",
            nameId: "uchihaSasuke1",
            description:
              "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
            val: NumberInt(0),
            target: "enemy",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "mental"],
            type: "attack",
            alt: false,
            harmful: true,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          },
          {
            id: NumberInt(3),
            name: "Swift Block",
            nameId: "uchihaSasuke1",
            description:
              "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
            val: NumberInt(0),
            target: "self",
            cooldown: NumberInt(4),
            counter: NumberInt(4),
            classes: ["instant", "physical"],
            type: "invulnerable",
            alt: false,
            harmful: false,
            state: "active",
            required: false,
            marking: false,
            usage: NumberInt(0),
            multi: NumberInt(0),
            noCounter: false,
            isMulti: false,
            ignoreInvul: false,
            energy: {
              a: NumberInt(0),
              i: NumberInt(0),
              s: NumberInt(0),
              w: NumberInt(0),
              r: NumberInt(1)
            }
          }
        ],
        alive: true,
        id: NumberInt(2),
        team: "teamOdd"
      }
    ],
    energy: {
      teamOdd: {
        a: NumberInt(5),
        s: NumberInt(0),
        i: NumberInt(4),
        w: NumberInt(5)
      },
      teamEven: {
        a: NumberInt(4),
        s: NumberInt(7),
        i: NumberInt(6),
        w: NumberInt(4)
      }
    },
    turn: NumberInt(17),
    winner: {
      state: true,
      name: "mika"
    },
    team: {
      teamOdd: "leciel",
      teamEven: "mika"
    },
    timestamp: 1526908803208.0,
    room: "jhg9zgo8",
    log: []
  }
];
