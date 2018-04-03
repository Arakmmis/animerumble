let constructor = require('./constructor.js')
let heroes = require('./heroes.js')
let character = require('./character/index.js')

function main(payload, callback) {
    console.log(payload)
    console.log(character)
    //Define    
    let action = {}     
    let state = {
        teamOdd: [
            new constructor.character(character[character.findIndex(x => x.id === payload.team.teamOddChar[0])]),
            new constructor.character(character[character.findIndex(x => x.id === payload.team.teamOddChar[1])]),
            new constructor.character(character[character.findIndex(x => x.id === payload.team.teamOddChar[2])]),
        ],
        teamEven: [
            new constructor.character(character[character.findIndex(x => x.id === payload.team.teamEvenChar[0])]),
            new constructor.character(character[character.findIndex(x => x.id === payload.team.teamEvenChar[1])]),
            new constructor.character(character[character.findIndex(x => x.id === payload.team.teamEvenChar[2])]),
        ],
        mana: {
            teamOdd: 1,
            teamEven: 0,
        },
        energy: {
            teamOdd: {
                a,
                s,
                i,
                w
            },
            teamEven: {
                a,
                s,
                i,
                w
            }
        },
        turn: 1,        
        winner: {
            state: false,
            name: ''
        },
        team: {
            teamOdd: payload.team.teamOdd,
            teamEven: payload.team.teamEven
        },
        room: payload.room
    }
    state.teamEven.forEach((x, i) => {
        x.name += 0
        x.id = i
        x.team = 'teamEven'
    })
    state.teamOdd.forEach((x, i) => {
        x.name += 1
        x.id = i
        x.team = 'teamOdd'
    })
        
    callback(state)
}

module.exports = {
    main: main
}