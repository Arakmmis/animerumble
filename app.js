const { List, Map } = require('immutable')

function character(payload) {
    this.name = payload.name
    this.hp = payload.hp
    this.status = []
    this.skill = payload.skill
}

function skill(payload) {
    this.type = payload.type
    this.damage = payload.damage    
    this.apply = function(payload){
        return payload.target.set('hp', payload.target.get('hp') - this.damage)
        console.log(payload.target.name, payload.target.hp)
    }
}

function state(payload) {

}

function main(payload, callback) {
    //Define
    let action = {}    

    //Set State
    let attack = new skill({
        type: 'attack',
        damage: 10
    })    
    let playerOne = new character({
        name: 'playerOne',
        hp: 100,
        skill: [attack]
    })    
    let heroOne = new character({
        name: 'heroOne',
        hp: 100,
        skill: [attack]
    })    

    let playerTwo = new character({
        name: 'playerTwo',
        hp: 100,
        skill: [attack]
    })
    let heroTwo = new character({
        name: 'heroTwo',
        hp: 100,
        skill: [attack]
    })

    let state = Map({
        playerOne: Map(playerOne),
        playerTwo: Map(playerTwo),
        heroOne: Map(heroOne),
        heroTwo: Map(heroTwo),
        turn: 1
    })
    let store = List.of(state)
    // store.push(state)
    console.log(store)
    action.store = store.get(-1)

    function registerAttack(payload) {        
        let state = store.get(-1).withMutations((state) => {
            state
                .set('turn',state.get('turn') + 1)
                
            payload.forEach(payload => {
                console.log(payload)
                let offense = state.get(payload.offense)
                let target = state.get(payload.target)
                state.set(payload.target, offense.get('skill')[payload.skill].apply({target: target}))
            })
        })                
        store = store.push(state)        
        
        action.view(store.get(-1))
    }
    action.registerAttack = registerAttack    
    callback(action)
}

function battleStart(payload) {

}

function readStatus(payload) {

}



function applyAttack(payload) {

}

function battleEnd(payload) {

}


module.exports = {
    main: main
}