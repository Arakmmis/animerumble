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
    let store = []

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

    let state = {
        playerOne: Immutable.Map(playerOne),
        playerTwo: Immutable.Map(playerTwo),
        heroOne: Immutable.Map(heroOne),
        heroTwo: Immutable.Map(heroTwo),
        turn: 1
    }

    store.push(state)
    action.store = store[store.length-1]

    function registerAttack(payload) {        
        let state = {
            turn: store.length+1
        }
        state[payload.offense.get('name')] = payload.offense
        state[payload.target.get('name')] = payload.offense.get('skill')[payload.skill].apply({target: payload.target})
        store.push(state)
        
        action.view(store[store.length-1])        
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

