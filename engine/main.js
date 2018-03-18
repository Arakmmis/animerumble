let sequence = require('./sequence.js')
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
        myTeam: '',
        winner: 'tbd'
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
    
    let store = [state]
    action.store = store[store.length - 1]    
    action.sequence = sequence
    callback(action)
}

module.exports = {
    main: main
}