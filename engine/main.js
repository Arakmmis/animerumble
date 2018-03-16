let sequence = require('./sequence.js')
let constructor = require('./constructor.js')
let heroes = require('./heroes.js')

function main(payload, callback) {
    //Define    
    let action = {}     
    let state = {
        teamA: [
            new constructor.character(heroes.naruto),
            new constructor.character(heroes.heroOne),
            new constructor.character(heroes.heroTwo),
        ],
        teamB: [
            new constructor.character(heroes.playerTwo),
            new constructor.character(heroes.heroTwo),
            new constructor.character(heroes.playerThree),
        ],
        turn: 1,
        myTeam: ''
    }
    state.teamA.forEach((x, i) => x.id = i)
    state.teamB.forEach((x, i) => x.id = i)
    
    let store = [state]
    action.store = store[store.length - 1]    
    action.sequence = sequence
    callback(action)
}

module.exports = {
    main: main
}