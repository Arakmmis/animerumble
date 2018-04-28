let constructor = require('./constructor.js')
let heroes = require('./heroes.js')
let character = require('./character/index.js')
let helper = require('./helper.js')
let _ = require('lodash')

function char(nameId){
    return new constructor.character(_.cloneDeep(character[character.findIndex(x => x.id === nameId)]))
}

function main(payload, callback) {
    console.log(payload)
    console.log(character)
    let energy = helper.energy(1)
    //Define    
    let action = {}     
    let state = {
        teamOdd: [
            char(payload.team.teamOddChar[0]),
            char(payload.team.teamOddChar[1]),
            char(payload.team.teamOddChar[2])            
        ],
        teamEven: [
            char(payload.team.teamEvenChar[0]),
            char(payload.team.teamEvenChar[1]),
            char(payload.team.teamEvenChar[2]),            
        ],        
        energy: {
            teamOdd: {
                a: energy.a,
                s: energy.s,
                i: energy.i,
                w: energy.w
            },
            teamEven: {
                a: 0,
                s: 0,
                i: 0,
                w: 0
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