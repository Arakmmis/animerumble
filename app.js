const {
    List,
    Map
} = require('immutable')

function character(payload) {
    this.name = payload.name
    this.hp = payload.hp
    this.status = []
    this.skill = payload.skill
}

function skill(payload) {
    this.type = payload.type
    this.damage = payload.damage
    this.apply = function (payload) {
        console.log('inside',payload.target.get('name'), payload.target.get('hp'),this.damage)
        let result = payload.target.set('hp', payload.target.get('hp') - this.damage)        
        console.log('result',result)
        return result
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
        teamA: Map({
            playerOne: Map(playerOne),
            heroOne: Map(heroOne),
        }),
        teamB: Map({
            playerTwo: Map(playerTwo),
            heroTwo: Map(heroTwo),
        }),
        turn: 1,
        myTeam: ''
    })
    let store = List.of(state)
    // store.push(state)
    console.log(store)
    action.store = store.get(-1)

    function registerAttack(payload) {
        let state = store.get(-1).withMutations((state) => {
            state
                .set('turn', state.get('turn') + 1)

            payload.forEach(payload => {
                console.log(payload)

                function checkTeam(owner) {
                    console.log(state.get('teamA'))
                    if(state.get('teamA').has(owner)){
                    // if (state.hasIn(['teamA', owner])) { 
                        console.log('hi')                       
                        return state.getIn(['teamA', owner])
                    } else {
                        return state.getIn(['teamB', owner])
                    }
                }
                function teamStore(owner) {
                    console.log(state.get('teamA'))
                    if(state.get('teamB').has(owner)){
                    // if (state.hasIn(['teamA', owner])) { 
                        console.log(state)                       
                        return 'teamB'
                    } else {
                        return 'teamA'
                    }
                }
                console.log(state.get('teamB').has(payload.target))
                let theTeam = teamStore(payload.target)                
                let offense = checkTeam(payload.offense)
                console.log(offense)
                let target = checkTeam(payload.target)                
                console.log('target',target)
                state.get(theTeam).set(payload.target, offense.get('skill')[payload.skill].apply({
                    target: target
                }))                
            })
        })
        console.log('skill',state.get('teamB').get('playerTwo'))
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