let constructor = require('./constructor.js')
let heroes = require('./heroes.js')
let naruto = require('./character/naruto.js')

function main(payload, callback) {
    //Define    
    let action = {}     
    let state = {
        teamOdd: [
            new constructor.character(naruto),
            new constructor.character(heroes.heroOne),
            new constructor.character(heroes.heroTwo),
        ],
        teamEven: [
            new constructor.character(heroes.playerTwo),
            new constructor.character(heroes.heroThree),
            new constructor.character(heroes.playerThree),
        ],
        mana: {
            teamOdd: 1,
            teamEven: 0,
        },
        turn: 1,        
        winner: 'tbd',
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